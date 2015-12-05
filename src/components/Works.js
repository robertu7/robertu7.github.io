import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { WorkBanner } from './WorkBanner'
import { WorkDemo, WorkDemoZoom } from './WorkDemo'


let Work = props => {
    return (
        <div className="work" id={props.workId}>
            <WorkBanner
                workId={props.workId}
                onToggleActive={props.onToggleActive}
                {...props.info}
                {...props.active}
            />
            <ReactCSSTransitionGroup
                transitionName="react"
                transitionEnterTimeout={700}
                transitionLeaveTimeout={700}
            >
                {props.active.isDemoActive && 
                    <WorkDemo
                        key={'WorkDemo'}
                        workId={props.workId}
                        screenshots={props.screenshots}
                        zoomIn={props.onDemoZoom}
                    />
                }
                {props.active.demoZoomSrc &&
                    <WorkDemoZoom
                        key={'WorkDemoZoom'}
                        zoomOut={props.onDemoZoom}
                        {...props.active}
                    />
                }
            </ReactCSSTransitionGroup>
        </div>
    )
};


export let Works = props => {

    let works = Object.keys(props.works).map( (workId, index) => {
        const work = props.works[workId];

        return (
            <Work
                key={index}
                workId={workId}
                onToggleActive={ () => props.onToggleActive(workId, work.active.isBannerActive, work.active.isDemoActive) }
                onDemoZoom={ (src, description) => props.onDemoZoom(workId, src, description) }
                {...work}
            />
        );
    });

    return (
        <div>
            {works}
        </div>
    );
};