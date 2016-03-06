import React from 'react';

import iconSprites from 'images/icon-sprites.svg';

export default ({ viewBox, name, className }) => (
    <svg
        viewBox="0 0 100 100"
        className={`${className ? className : ''}`}
    >
        <use xlinkHref={`#${name}`}></use>
    </svg>
);