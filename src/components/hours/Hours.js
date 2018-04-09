import classnames from 'classnames'
import { getDay } from 'date-fns'
import PropTypes from 'prop-types'
import React from 'react'

import hours from '../../constants/hours'
import './Hours.css'

class Hours extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = { currentDayIndex: null };
    }

    // Since this is a statically generated site, we
    // can't rely on using a date on the server because
    // it will just be the date of which the static site
    // was generated. Let's leave this to the client.
    componentDidMount() {
        // Returns 0-6, so we can rely on index number
        // since our hours constants start on Sunday
        this.setState({
            currentDayIndex: getDay(new Date()),
        });
    }

    render() {
        return (
            <dl className={`hours ${this.props.className}`}>
            {
                hours.map(({ day, hourEnd, hourStart, isOpen }, i) => (
                    <div
                        className={classnames('hours-row', {
                            'hours-row--current-day': this.state.currentDayIndex === i,
                        })}
                        key={day}
                    >
                        <dt className='hours-row__day'>
                            { day }
                        </dt>
                        <dd className='hours-row__time'>
                            { !isOpen && 'Closed' }
                            { isOpen && `${hourStart} - ${hourEnd}` }
                        </dd>
                    </div>
                ))
            }
            </dl>
        )
    }

}

Hours.defaultProps = {
    className: 'hours',
}

Hours.propTypes = {
    className: PropTypes.string,
}

export default Hours
