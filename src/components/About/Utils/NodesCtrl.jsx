import React from 'react';
import assign from 'object.assign';

// Components
import Section from 'components/Utils/Section';

// Export
export default ComposedComponent => Section(
    class extends React.Component {
        constructor(props) {
            super(props)
            this.state = { nodes: { activeIndex: -1, data: props._nodes } }
            this.handleNodesChange = this.handleNodesChange.bind(this)
        }
        handleNodesChange(activeIndex) {
            const { subsections, _nodes } = this.props;
            const activeNode = subsections[activeIndex] && subsections[activeIndex]['nodes'] || [];

            this.setState({ nodes: {
                activeIndex,
                data: _nodes.map(i => activeNode.indexOf(i.name) >= 0 ? assign({}, i, { active: true }) : i)
            }})
        }
        render() {
            return (
                <ComposedComponent
                    onNodesChange={this.handleNodesChange}
                    {...this.props}
                    {...this.state}
                />
            );
        }
    }
);