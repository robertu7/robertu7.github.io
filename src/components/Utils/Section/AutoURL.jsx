import React from 'react';
import { hashHistory } from 'react-router';

// Components
import VisibilitySensor from 'components/Utils/VisibilitySensor';

// Export
export default ComposedComponent => class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: false };
        this.handleVisibleChange = this.handleVisibleChange.bind(this);
        this.updateURL = this.updateURL.bind(this);
    }
    handleVisibleChange(isVisible) {
        if (isVisible === this.state.visible) return;

        this.setState({ visible: isVisible });

        isVisible && this.updateURL();
    }
    updateURL() {
        const { location: { pathname, query: { name } }, sectionName } = this.props;

        if (name === sectionName) return;

        hashHistory.replace({
            pathname,
            query: { name: sectionName },
        });
    }
    shouldComponentUpdate(nextProps, nextState) {
        const shouldUpdate = this.state.visible !== nextState.visible;
        __DEV__ && shouldUpdate && console.log(`[update: AutoURL] ${this.props.sectionName}`);
        return shouldUpdate;
    }
    render() {
        return (
            <VisibilitySensor partialVisibility={false} onChange={this.handleVisibleChange}>
                <ComposedComponent {...this.props} {...this.state} updateURL={this.updateURL} />
            </VisibilitySensor>
        );
    }
};
