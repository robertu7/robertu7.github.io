import React from 'react';
import classNames from 'classnames';
import { hashHistory } from 'react-router';

// Components
import VisibilitySensor from 'components/Utils/VisibilitySensor';
const AutoURL = ComposedComponent => class extends React.Component {
    constructor(props) {
        super(props)
        this.state = { visible: false };
        this.handleVisibleChange = this.handleVisibleChange.bind(this);
        this.updateURL = this.updateURL.bind(this);
    }
    handleVisibleChange(isVisible) {
        if (isVisible === this.state.visible) return;

        this.setState({ visible: isVisible })

        isVisible && this.updateURL()
    }
    updateURL() {
        const { location: { pathname, query: { name } }, sectionName } = this.props;

        if (name === sectionName) return;

        hashHistory.replace({
            pathname,
            query: { name: sectionName }
        })
    }
    shouldComponentUpdate(nextProps, nextState) {
        const shouldUpdate = this.state.visible !== nextState.visible;
        __DEV__ && shouldUpdate && console.log(`[update: AutoURL] ${this.props.sectionName}`)
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

// Export
export default SectionComponent => AutoURL(
    class extends React.Component {
        constructor(props) {
            super(props)
            this.state = { active: false };
            this.handleActiveChange = this.handleActiveChange.bind(this);
            this.handleClick = this.handleClick.bind(this);
        }
        handleActiveChange() {
            this.setState({ active: !this.state.active })
        }
        handleClick() {
            const { visible, updateURL } = this.props;
            !visible && updateURL()
        }
        shouldComponentUpdate(nextProps, nextState) {
            const shouldUpdate = (
                this.state.active !== nextState.active 
                || this.props.visible !== nextProps.visible
            );
            __DEV__ && shouldUpdate && console.log(`[update: Section] ${this.props.sectionName}`)
            return shouldUpdate;
        }
        render() {
            const { sectionName, visible } = this.props;
            const sectionClass = classNames({
                'section': true,
                [`section--${sectionName}`]: true
            });
            return (
                <div className={sectionClass} onClick={this.handleClick}>
                    <SectionComponent
                        onSectionChange={this.handleActiveChange}
                        {...this.props}
                        {...this.state}
                    />
                </div>
            );
        }
    }
);