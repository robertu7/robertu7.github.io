import React from 'react';

import iconSprites from 'images/icon-sprites.svg';

const Icon = ({ name, className }) => (
    <svg
        viewBox="0 0 100 100"
        className={`${className || ''}`}
    >
        <use xlinkHref={`#${name}`}></use>
    </svg>
);

Icon.propTypes = {
    name: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
};

export default Icon;
