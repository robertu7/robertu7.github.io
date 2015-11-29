import React from 'react';


export default class WorkBanner extends React.Component {
    render (){
        let screen_name = this.props.screen_name;
        let BannerClass = 'work__banner vertically_center animate--general ' + (this.props.isActive ? '' : 'work__banner--active');
        let IconSrc = '/src/img/icon-sprites.svg#' + screen_name;
        let IconClass= 'animate--general work__banner__logo ' + 'work__banner__logo--' + screen_name;

        return (
            <div className={BannerClass}>
                <div>
                    <button className={IconClass} onClick={this.props.toggleActive} type="button">
                        <svg viewBox="0 0 100 100" className="animate--general">
                            <use xlinkHref={IconSrc}></use>
                        </svg>
                    </button>
                </div>
            </div>
        );
    }
}
