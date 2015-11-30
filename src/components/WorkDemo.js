import React from 'react';


export let WorkDemo = (props) => {
    let screenshots = props.screenshots.map(screenshot => {
        let imgSrc = `/src/img/screenshots/${screenshot.id}.jpg`;
        let imgDescription = screenshot.description;
        return (
            <img
                key={screenshot.id}
                src={imgSrc}
                onClick={props.zoomIn.bind(null, imgSrc, imgDescription)}
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
    screenshots: React.PropTypes.array.isRequired
}


export let WorkDemoZoom = (props) => (
    <div
        className="work__demo--zoom vertically_center animate--general"
        onClick={props.zoomOut}
    >
        <img src={props.src} />
        <span className="work__demo--zoom__description">{props.description}</span>
    </div>
);
