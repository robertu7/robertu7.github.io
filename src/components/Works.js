import React from 'react';
import worksData from '../data/works.json';
import Banner from './Banner';

export default class Work extends React.Component {
    render() {
        let works = worksData.map((work) => {
            return (
                <div className="work" key={work.screen_name}>
                    <Banner screen_name={work.screen_name}/>
                </div>
            );
        });

        return (
            <div>
                {works}
            </div>
        );
    }
}
