import React from 'react';

// Helpers
import works from './works.json';

// Components
import Section from 'components/Utils/Section';
import WorkBanner from './WorkBanner';
import WorkSubSection from './WorkSubSection';
const Work = Section(
    ({ active, info, screenshots, onSectionChange }) => (
        <div>
            <WorkBanner active={active} onSectionChange={onSectionChange} {...info} />
            <WorkSubSection active={active} name={info.name} screenshots={screenshots} />
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