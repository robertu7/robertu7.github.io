import React from 'react';
import classNames from 'classnames';

// Components
import Icon from 'components/Utils/Icon';
import Transition from 'components/Utils/Transition';
import Banner from 'components/Utils/Banner';
const WorkBanner = ({ outerActive, innerActive, name, description, website, repository, onSectionChange }) => {
    const bannerClass = classNames({
        'banner vertically_center animate--general': true,
        'banner--active': outerActive
    });
    const btnClass = classNames({
        'banner__logo animate--general': true,
        [`icon--${name}`]: true
    });
    const linkBtnClass = color => classNames({
        'banner__link-btn animate--faster': true,
        [`banner__link-btn--${color}`]: true
    });
    return (
        <div className={bannerClass}>
            <button className={btnClass} onClick={onSectionChange} type="button" title={name}>
                <Icon name={name} className="animate--general" />
            </button>
            <Transition>
            {innerActive && (
                <div className="banner__description animate--general">
                    <p>{description}</p>
                    <a href={website} target="_blank" title={website}>
                        <span className={linkBtnClass('red')}></span>
                    </a>
                    <a href={repository} target="_blank" title={repository}>
                        <span className={linkBtnClass('blue')}></span>
                    </a>
                </div>
            )}
            </Transition>
        </div>
    );
}

// Export
export default Banner(WorkBanner);