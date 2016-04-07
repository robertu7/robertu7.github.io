import React from 'react';

// Helpers
import about from './about.json';

// Components
import NodesCtrl from './Utils/NodesCtrl';
import AboutBanner from './Utils/AboutBanner';
import AboutSubSection from './Utils/AboutSubSection';
const About = NodesCtrl(
    props => (
        <div>
            <AboutBanner {...props} />
            <AboutSubSection {...props} />
        </div>
    )
);

// Export
export default props => (
    <div>
    {about.map(item => (
        <About
            key={item.name}
            location={props.location}
            sectionName={item.name}
            {...item}
        />
    ))}
    </div>
);
