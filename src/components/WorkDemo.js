import React from 'react';
import Media from './Media';

export let WorkDemo = props => {
    let screenshots = props.screenshots.map(screenshot => {
        let largeSrc = `/src/img/screenshots/large/${screenshot.id}.jpg`;
        let thumbSrc = `/src/img/screenshots/thumb/${screenshot.id}.jpg`
        let imgDescription = screenshot.description;
        return (
            <img
                key={screenshot.id}
                src={thumbSrc}
                onClick={props.zoomIn.bind(null, largeSrc, imgDescription)}
            />
        )
    });

    return (
        <div className="work__demo overflow--x animate--general">
            {screenshots}
        </div>
    );
};
WorkDemo.propTypes = {
    screenshots: React.PropTypes.array.isRequired,
    zoomIn: React.PropTypes.func.isRequired
}


export let WorkDemoZoom = props => (
    <div
        className="work__demo--zoom animate--general"
        onClick={props.zoomOut}
    >
        <Media type="image" src={props.src} />
        <span className="work__demo--zoom__description">{props.description}</span>
    </div>
);
WorkDemoZoom.propTypes = {
    zoomOut: React.PropTypes.func.isRequired,
    src: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired
}
