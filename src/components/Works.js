import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import worksData from '../data/works.json';
import WorkBanner from './WorkBanner';
import { WorkDemo, WorkDemoZoom } from './WorkDemo';
import { ToggleText } from './Utils';


class Work extends React.Component {
    constructor (props){
        super(props)
        this.state = { isBannerActive: false, isDemoActive: false, demoZoomSrc: '', demoZoomDescription: '' }
    }
    render (){
        let work = this.props.workData;

        return (
            <div>
                <WorkBanner
                    isBannerActive ={this.state.isBannerActive}
                    isDemoActive={this.state.isDemoActive}
                    toggleActive={this.toggleActive.bind(this)}
                    {...work.info}
                />
                <ReactCSSTransitionGroup
                    transitionName="react"
                    transitionEnterTimeout={700}
                    transitionLeaveTimeout={700}
                >
                    {this.state.isDemoActive && 
                        <WorkDemo
                            key={'WorkDemo'}
                            screenshots={work.screenshots}
                            zoomIn={this.toggleDemoZoom.bind(this)}
                        />
                    }
                    {this.state.demoZoomSrc &&
                        <WorkDemoZoom
                            key={this.state.demoZoomSrc}
                            src={this.state.demoZoomSrc}
                            description={this.state.demoZoomDescription}
                            zoomOut={this.toggleDemoZoom.bind(this, '', '')}
                        />
                    }
                </ReactCSSTransitionGroup>
            </div>
        );
    }
    toggleActive (){
        let [bannerTimeout, demoTimeout] = this.state.isDemoActive ? [700, 0] : [0, 700];

        setTimeout(() =>{
            this.setState({ isBannerActive: !this.state.isBannerActive })
        }, bannerTimeout)

        setTimeout(() =>{
            this.setState({ isDemoActive: !this.state.isDemoActive })
        }, demoTimeout)
    }
    toggleDemoZoom (src, description){
        this.setState({ demoZoomSrc: src , demoZoomDescription: description })
    }
}
Work.propTypes = {
    workData: React.PropTypes.object.isRequired
}

let Footer = props => (
    <div className="footer vertically_center">
        <span className="footer__link text_uppercase">
            <a href="mailto:robertu0717@gmail.com" target="_blank">EMAIL</a>
        </span>
        <span className="footer__link text_uppercase">
            <a href="https://github.com/RoberMac" target="_blank">GitHub</a>
        </span>
        <span className="footer__link text_uppercase">
            <ToggleText text={ ['Wechat', 'RoberMac'] }/>
        </span>
    </div>
);


export default class Works extends React.Component {
    render (){
        let works = worksData.map(work => {
            return (
                <div className="work" key={work.info.screen_name}>
                    <Work workData={work}/>
                </div>
            );
        });

        return (
            <div>
                {works}
                <Footer />
            </div>
        );
    }
}