import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import worksData from '../data/works.json';
import WorkBanner from './WorkBanner';
import WorkDemo from './WorkDemo';


class Work extends React.Component {
    constructor (props){
        super(props)
        this.state = { isActive: true }
    }
    render (){
        let work = this.props.workData;

        return (
            <div>
                <WorkBanner
                    isActive={this.state.isActive}
                    screen_name={work.screen_name}
                    toggleActive={this.toggleActive.bind(this)}
                />
                <ReactCSSTransitionGroup
                    transitionName="react"
                    transitionEnterTimeout={700}
                    transitionLeaveTimeout={700}
                >
                    {this.state.isActive ? null : <WorkDemo screenshots={work.screenshots} />}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
    toggleActive (){
        this.setState({ isActive: !this.state.isActive })
    }
}

export default class Works extends React.Component {
    render (){
        let works = worksData.map(work => {
            return (
                <div className="work" key={work.screen_name}>
                    <Work workData={work}/>
                </div>
            );
        });

        return (
            <div>
                {works}
                <div className="work--next"></div>
            </div>
        );
    }
}