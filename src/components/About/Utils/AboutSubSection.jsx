import React from 'react';
import classNames from 'classnames';

// Components
import Transition from 'components/Utils/Transition';
import SubSection from 'components/Utils/SubSection';

export default SubSection(
    ({ subsections, nodes: { activeIndex }, onNodesChange }) => (
        <div className="subsection subsection--about overflow--x animate--general">
        {subsections.map((item, index) => {
            const { name, displayName, createdAt } = item;
            const active = index === activeIndex;
            const subsectionClass = classNames({
                'subsection__item cursor--pointer animate--general': true,
                'subsection__item--active': active,
                'subsection__item--inactive': !active,
            });
            return (
                <div
                    key={name}
                    className={subsectionClass}
                    onClick={() => onNodesChange(active ? -1 : index)}
                    title={name}
                >
                    <Transition>
                    {active && (
                        <div>
                            <span className="subsection__item__middle vertically_center">
                                {displayName || name}
                            </span>
                            {createdAt && (
                                <span className="subsection__item__sub">
                                    {createdAt}
                                </span>
                            )}
                        </div>
                    )}
                    </Transition>
                </div>
            );
        })}
        </div>
    )
);
