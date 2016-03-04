import React from 'react';
import assign from 'object.assign';
import classNames from 'classnames';

// Helper
import randomStyle from './randomStyle';

// Components
import Icon from 'components/Utils/Icon';

// Export
export default class index extends React.Component {
    constructor(props) {
        super(props)
        this.state = { styles: props.nodes.map(node => randomStyle[node.area]()) }
        this.updatePosition = this.updatePosition.bind(this)
    }
    updatePosition() {
        const { nodes } = this.props;

        this.setState({ styles: nodes.map(node => randomStyle[node.area]()) })
    }
    componentDidMount() {
        setTimeout(this.updatePosition)
        this.updatePositionInterval = setInterval(this.updatePosition, 7000)
    }
    componentWillUnmount() {
        clearInterval(this.updatePositionInterval)
    }
    render() {
        const { nodes } = this.props;
        const { styles } = this.state;
        return (
            <div>
            {nodes.map((node, index) => {
                const iconClass = classNames({
                    'animate--general': true,
                    'icon--active': node.active,
                    'icon--inactive': !node.active
                });
                return (
                    <a key={node.name} href={node.link} target="_blank">
                        <span className={iconClass} style={styles[index]} role="button">
                            <Icon name={node.name} />
                        </span>
                    </a>
                );
            })}
            </div>
        );
    }
}