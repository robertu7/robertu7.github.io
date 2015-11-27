import React from 'react';
import Segment from 'segment-js';


export default class Banner extends React.Component {
    render() {
        let Icon = require('../img/' + this.props.screen_name + '.svg');
        let IconClass= 'animate--faster work__banner__logo ' + 'work__banner__logo--' + this.props.screen_name;

        return (
            <div className="work__banner vertically_center">
                <div>
                    <button
                        type="button"
                        onMouseEnter={this.handleMouseEnter.bind(this)}
                        onClick={this.handleClick.bind(this)}
                    >
                        <Icon className={IconClass}/>
                    </button>
                </div>
            </div>
        );
    }
    handleMouseEnter (){
        let paths = document.querySelectorAll('.work__banner__logo--' + this.props.screen_name + ' path');

        [].forEach.call(paths, function (path){
            new Segment(path).draw('0', '100%', 1);
        })
    }
    handleClick (){
        console.log(this.props.screen_name, 'clicked!')
    }
}
