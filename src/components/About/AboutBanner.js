import React from 'react';
import classNames from 'classnames';

// Components
import Transition from 'components/Utils/Transition';
import Graph from 'components/Utils/Graph';
import Banner from 'components/Utils/Banner';
const AboutBanner = ({ outerActive, innerActive, heading, stacks, onSectionChange }) => {
    const bannerClass = classNames({
        'banner banner--about vertically_center animate--general': true,
        'banner--active': outerActive
    });
    return (
        <div className={bannerClass}>
            <button onClick={onSectionChange} type="button">
                <h1 className="banner__heading text_uppercase">{heading}</h1>
            </button>
            <Transition>
            {innerActive && <Graph nodes={stacks.data} />}
            </Transition>
        </div>
    );
}

// Export
export default Banner(AboutBanner);