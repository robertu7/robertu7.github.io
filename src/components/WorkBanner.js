import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

let Description = props => (
    <div className="work__banner__description animate--general">
        <p>{props.description}</p>
        <a href={props.website} target="_blank">
            <span className="work__banner__link-btn work__banner__link-btn--red animate--faster"></span>
        </a>
        <a href={props.repository} target="_blank">
            <span className="work__banner__link-btn work__banner__link-btn--blue animate--faster"></span>
        </a>
    </div>
);


export let WorkBanner = props => {
    let id = props.workId;
    let bannerState = props.isBannerActive ? 'work__banner--active' : '';
    let BannerClass = `work__banner ${bannerState} vertically_center animate--general`;
    let IconClass= `work__banner__logo work__banner__logo--${id} animate--general`;
    let IconSrc = `/src/img/icon-sprites.svg#${id}`;

    return (
        <div className={BannerClass}>
            <button className={IconClass} onClick={props.onToggleActive} type="button">
                <svg viewBox="0 0 100 100" className="animate--general">
                    <use xlinkHref={IconSrc}></use>
                </svg>
            </button>
            <ReactCSSTransitionGroup
                transitionName="react"
                transitionEnterTimeout={700}
                transitionLeaveTimeout={700}
            >
                {props.isDemoActive
                    ? <Description
                        description={props.description}
                        website={props.website}
                        repository={props.repository}
                    />
                : null}
            </ReactCSSTransitionGroup>
        </div>
    );
};