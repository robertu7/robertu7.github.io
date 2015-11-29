import React from 'react';


export default class WorkDemo extends React.Component {
    render (){
        let screenshots = this.props.screenshots.map(screenshot => {
            return (
                <img key={screenshot.id} src={`/src/img/screenshots/${screenshot.id}.jpg`} />
            )
        });

        return (
            <div className="work__demo overflow--x animate--general">
                {screenshots}
            </div>
        );
    }
}
