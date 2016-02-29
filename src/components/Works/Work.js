import React from 'react';
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
    }
    handleActiveChange() {
        this.setState({ active: !this.state.active })
    }
    shouldComponentUpdate(nextProps, nextState) {
        const shouldUpdate = this.state.active !== nextState.active;
        __DEV__ && shouldUpdate && console.log(`[shouldUpdate: Work] ${this.props.info.name}`)
        return shouldUpdate;
    }
    render() {
        const { active } = this.state;
        const { info, screenshots } = this.props;
        return (
            <div className={`work work--${info.name}`}>
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
    }
    handleVisibleChange(isVisible) {
        console.log(`${this.props.info.name} isVisible: ${isVisible}`)
        if (isVisible === this.state.visible) return;

        this.setState({ visible: isVisible })

        const { location: { pathname }, info: { name } } = this.props;
        if (isVisible) {
            hashHistory.replace({
                pathname,
                query: { name }
            })
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    render() {
        const { info, screenshots } = this.props;
        return (
            <VisibilitySensor partialVisibility={false} onChange={this.handleVisibleChange}>
                <Work info={info} screenshots={screenshots} />
            </VisibilitySensor>
        );
    }
}
