import React from 'react';
import classNames from 'classnames';

// Components
import Transition from 'components/Utils/Transition';
import SubSection from 'components/Utils/SubSection';
const AboutSubSection = ({ works, _stacks, stacks, onStacksChange }) => {

    return (
        <div className="subsection subsection--about overflow--x animate--general">
        {works.map((item, index) => {
            const active = index === stacks.index;
            const subsectionClass = classNames({
                "subsection__item animate--general": true,
                "subsection__item--inactive cursor--pointer": !active,
            });
            return (
                <div
                    key={item.name}
                    className={subsectionClass}
                    onClick={onStacksChange.bind(null, index)}
                >
                    <Transition>
                    {active && (
                        <div>
                            <span className="subsection__item__middle vertically_center">
                                {item.displayName}
                            </span>
                            <span className="subsection__item__sub">
                                {new Date(item.createdAt).toLocaleDateString()}
                            </span>
                        </div>
                    )}
                    </Transition>
                </div>
            );
        })}
        </div>
    );
};

// Export
export default SubSection(AboutSubSection);