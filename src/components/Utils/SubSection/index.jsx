import React from 'react';

import Transition from 'components/Utils/Transition';

export default SubSectionComponent => class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { subsectionActive: false };
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.sectionActive === nextProps.sectionActive) return;

        nextProps.sectionActive
            ? setTimeout(() => this.setState({ subsectionActive: true }), 700)
        : this.setState({ subsectionActive: false });
    }
    render() {
        const { subsectionActive } = this.state;
        return (
            <Transition>
            {subsectionActive && (
                <SubSectionComponent {...this.props} {...this.state} />
            )}
            </Transition>
        );
    }
};
