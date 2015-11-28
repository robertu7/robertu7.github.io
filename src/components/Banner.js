import React from 'react';

export default class Banner extends React.Component {
    render() {
        let IconSrc = '/src/img/icon-sprites.svg#' + this.props.screen_name;
        let IconClass= 'animate--faster work__banner__logo ' + 'work__banner__logo--' + this.props.screen_name;

        return (
            <div className="work__banner vertically_centers">
                    <button
                        className={IconClass}
                        onClick={this.handleClick.bind(this)}
                        type="button"
                    >
                        <svg viewBox="0 0 100 100" className="animate--faster">
                            <use xlinkHref={IconSrc}></use>
                        </svg>
                    </button>
            </div>
        );
    }
    handleClick (){
        console.log(this.props.screen_name, 'clicked!')
    }
}
