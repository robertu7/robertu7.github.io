import React from 'react';

// Helpers
import works from './works.json';

// Components
import Section from 'components/Utils/Section';
import WorkBanner from './Utils/WorkBanner';
import WorkSubSection from './Utils/WorkSubSection';
const Work = Section(
    props => (
        <div>
            <WorkBanner {...props.info} {...props} />
            <WorkSubSection {...props.info} {...props} />
        </div>
    )
);

// Export
export default props => (
    <div>
    {works.map(item => (
        <Work
            key={item.info.name}
            location={props.location}
            sectionName={item.info.name}
            {...item}
        />
    ))}
    </div>
);
