import React from 'react';
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
Description.propTypes = {
    description: React.PropTypes.string.isRequired,
    website: React.PropTypes.string.isRequired,
    repository: React.PropTypes.string.isRequired
}

export default class WorkBanner extends React.Component {
    render (){
        let screen_name = this.props.screen_name;
        let bannerState = this.props.isBannerActive ? 'work__banner--active' : '';
        let BannerClass = `work__banner ${bannerState} vertically_center animate--general`;
        let IconClass= `work__banner__logo work__banner__logo--${screen_name} animate--general`;
        let IconSrc = `/src/img/icon-sprites.svg#${screen_name}`;

        return (
            <div className={BannerClass}>
                <button className={IconClass} onClick={this.props.toggleActive} type="button">
                    <svg viewBox="0 0 100 100" className="animate--general">
                        <use xlinkHref={IconSrc}></use>
                    </svg>
                </button>
                <ReactCSSTransitionGroup
                    transitionName="react"
                    transitionEnterTimeout={700}
                    transitionLeaveTimeout={700}
                >
                    {this.props.isDemoActive
                        ? <Description {...this.props} />
                    : null}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
WorkBanner.propTypes = {
    screen_name: React.PropTypes.string.isRequired,
    isBannerActive: React.PropTypes.bool.isRequired,
    isDemoActive: React.PropTypes.bool.isRequired,
    toggleActive: React.PropTypes.func.isRequired
}