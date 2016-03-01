import React from 'react';
import classNames from 'classnames';
import { hashHistory } from 'react-router';

// Components
import VisibilitySensor from 'components/Utils/VisibilitySensor';
import Banner from './Banner';
import Demo from './Demo';
export class Work extends React.Component {
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
        __DEV__ && shouldUpdate && console.log(`[shouldUpdate: Work] ${this.props.info.name}`)
        return shouldUpdate;
    }
    render() {
        const { active } = this.state;
        const { info, screenshots, visible } = this.props;
        const workClass = classNames({
            'work': true,
            [`work--${info.name}`]: true,
            'cursor--pointer': !visible
        });
        return (
            <div className={workClass} onClick={this.handleClick}>
                <Banner active={active} onChange={this.handleActiveChange} {...info} />
                <Demo active={active} name={info.name} screenshots={screenshots} />
            </div>
        );
    }
}


// Export
export default class WorkWrapper extends React.Component {
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
        const { location: { pathname }, info: { name } } = this.props;

        hashHistory.replace({
            pathname,
            query: { name }
        })
    }
    shouldComponentUpdate(nextProps, nextState) {
        const shouldUpdate = this.state.visible !== nextState.visible;
        __DEV__ && shouldUpdate && console.log(`[shouldUpdate: WorkWrapper] visible ${this.props.info.name}`)
        return shouldUpdate;
    }
    render() {
        return (
            <VisibilitySensor partialVisibility={false} onChange={this.handleVisibleChange}>
                <Work {...this.props} {...this.state} updateURL={this.updateURL} />
            </VisibilitySensor>
        );
    }
}
