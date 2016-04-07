import React from 'react';
import classNames from 'classnames';

// Helper
import randomPosition from './randomPosition';

// Components
import Icon from 'components/Utils/Icon';
class Node extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: randomPosition({ area: props.area }),
        };
        this.updatePosition = this.updatePosition.bind(this);
    }
    componentDidMount() {
        const randomTime = (Math.random() * 10 + 60) * 1000;

        setTimeout(this.updatePosition);

        this.updatePositionInterval = setInterval(this.updatePosition, randomTime);
    }
    componentWillUnmount() {
        clearInterval(this.updatePositionInterval);
    }
    updatePosition() {
        this.setState({ style: randomPosition({ area: this.props.area }) });
    }
    render() {
        const { style } = this.state;
        const { displayName, name, link, size, active } = this.props;
        const iconClass = classNames({
            'graph__icon animate--general': true,
            [`graph__icon--${size}`]: true,
            'icon--active': active,
            'icon--inactive': !active,
        });
        return (
            <a key={name} href={link} target="_blank" title={displayName || name}>
                <span className={iconClass} style={style} role="button">
                    <Icon name={name} />
                </span>
            </a>
        );
    }
}
const Graph = ({ nodes }) => (
    <div>
        {nodes.map(node => (
            <Node key={node.name} {...node} />
        ))}
    </div>
);

Graph.propTypes = {
    nodes: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

// Export
export default Graph;
