import React from 'react'

import ToggleText from './ToggleText'

export let Footer = props => (
    <div className="footer vertically_center">
        <span className="footer__link text_uppercase">
            <a href="mailto:robertu0717@gmail.com" target="_blank">EMAIL</a>
        </span>
        <span className="footer__link text_uppercase">
            <a href="https://github.com/RoberMac" target="_blank">GitHub</a>
        </span>
        <span className="footer__link text_uppercase">
            <ToggleText text={ ['Wechat', 'RoberMac'] }/>
        </span>
    </div>
);