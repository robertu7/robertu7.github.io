import React from 'react';
import classNames from 'classnames';

// Components
import Transition from 'components/Utils/Transition';
import Banner from 'components/Utils/Banner';
import Graph from './Graph';

export default Banner(
    ({ outerActive, innerActive, heading, nodes, onSectionChange }) => {
        const bannerClass = classNames({
            'banner banner--about vertically_center animate--general': true,
            'banner--active': outerActive,
        });
        return (
            <div className={bannerClass}>
                <span className="btn" onClick={onSectionChange} role="button" title={heading}>
                    <h2 className="banner__heading text_uppercase">{heading}</h2>
                </span>
                <Transition>
                {innerActive && <Graph nodes={nodes.data} />}
                </Transition>
            </div>
        );
    }
);
