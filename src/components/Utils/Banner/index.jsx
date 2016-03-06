import React from 'react';
import classNames from 'classnames';

export default BannerComponent => class extends React.Component {
    constructor(props) {
        super(props)
        this.state = { outerActive: false, innerActive: false }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.sectionActive === nextProps.sectionActive) return;

        if (nextProps.sectionActive) {
            this.setState({ outerActive: true })
            setTimeout(() => this.setState({ innerActive: true }), 700)
        } else {
            this.setState({ innerActive: false })
            setTimeout(() => this.setState({ outerActive: false }), 700)
        }
    }
    render() {
        return <BannerComponent {...this.props} {...this.state} />;
    }
}