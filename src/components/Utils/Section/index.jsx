import React from 'react';
import classNames from 'classnames';

// Components
import AutoURL from './AutoURL';

// Export
export default SectionComponent => AutoURL(
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = { sectionActive: false };
            this.handleActiveChange = this.handleActiveChange.bind(this);
            this.handleClick = this.handleClick.bind(this);
        }
        handleActiveChange() {
            this.setState({ sectionActive: !this.state.sectionActive });
        }
        handleClick() {
            const { visible, updateURL } = this.props;
            !visible && updateURL();
        }
        shouldComponentUpdate(nextProps, nextState) {
            const shouldUpdate = (
                this.state.sectionActive !== nextState.sectionActive
                || this.props.visible !== nextProps.visible
            );
            __DEV__ && shouldUpdate && console.log(`[update: Section] ${this.props.sectionName}`);
            return shouldUpdate;
        }
        render() {
            const { sectionName } = this.props;
            const sectionClass = classNames({
                section: true,
                [`section--${sectionName}`]: true,
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
