import React from 'react';
import Media from './Media';

export let WorkDemo = props => {
    let screenshots = props.screenshots.map( (description, index) => {
        const SUFFIX = `${props.workId}_${index}.jpg`;
        let largeSrc = `/src/img/screenshots/large/${SUFFIX}`;
        let thumbSrc = `/src/img/screenshots/thumb/${SUFFIX}`;

        return (
            <img
                key={index}
                src={thumbSrc}
                onClick={ () => props.zoomIn(largeSrc, description)}
            />
        )
    });

    return (
        <div className="work__demo overflow--x animate--general">
            {screenshots}
        </div>
    );
};


export let WorkDemoZoom = props => {
    const SUFFIX = props.demoZoomSrc.indexOf('PodPicker') >= 0 ? 'text_uppercase' : '';
    let descriptionClass = `work__demo--zoom__description ${SUFFIX}`;

    return (
        <div className="work__demo--zoom animate--general" onClick={ () => props.zoomOut('', '') }>
            <Media type="image" src={props.demoZoomSrc} />
            <span className={descriptionClass}>{props.demoZoomDescription}</span>
        </div>
    );
};