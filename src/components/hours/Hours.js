import classnames from 'classnames'
import { getDay } from 'date-fns'
import PropTypes from 'prop-types'
import React from 'react'

import hours from '../../constants/hours'
import './Hours.css'

const Hours = ({ className }) => {
    // Returns 0-6, so we can rely on index number
    // since our hours constants start on Sunday
    const currentDay = getDay(new Date())
    
    return (
        <dl className={`hours ${className}`}>
        {
            hours.map(({ day, hourEnd, hourStart, isOpen }, i) => (
                <div 
                    className={classnames('hours-row', {
                        'hours-row--current-day': currentDay === i,
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

Hours.defaultProps = {
    className: 'hours',
}

Hours.propTypes = {
    className: PropTypes.string,
}

export default Hours