import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './ContentWrapper.css'

const ContentWrapper = ({ children, padBottom, padLeft, padRight, padTop }) => (
    <div className={classnames('content-wrapper', {
        'content-wrapper--pad-bottom': padBottom,
        'content-wrapper--pad-left': padLeft,
        'content-wrapper--pad-right': padRight,
        'content-wrapper--pad-top': padTop,
    })}>
        { children }
    </div>
)

ContentWrapper.defaultProps = {
    padBottom: true,
    padLeft: true,
    padRight: true,
    padTop: true,
}

ContentWrapper.propTypes = {
    padBottom: PropTypes.bool,
    padLeft: PropTypes.bool,
    padRight: PropTypes.bool,
    padTop: PropTypes.bool,
}

export default ContentWrapper