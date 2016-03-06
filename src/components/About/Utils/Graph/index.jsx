import React from 'react';
import assign from 'object.assign';
import classNames from 'classnames';

// Helper
import randomPosition from './randomPosition';

// Components
import Icon from 'components/Utils/Icon';

// Export
export default class extends React.Component {
    constructor(props) {
        super(props)

        const { nodes, HEIGHT } = props;
        this.state = { styles: nodes.map(node => randomPosition({ area: node.area, HEIGHT })) }
        this.updatePosition = this.updatePosition.bind(this)
    }
    updatePosition() {
        const { nodes, HEIGHT } = this.props;
        this.setState({ styles: nodes.map(node => randomPosition({ area: node.area, HEIGHT })) })
    }
    componentDidMount() {
        setTimeout(this.updatePosition)
        this.updatePositionInterval = setInterval(this.updatePosition, 60 * 1000)
    }
    componentWillUnmount() {
        clearInterval(this.updatePositionInterval)
    }
    render() {
        const { nodes } = this.props;
        const { styles } = this.state;
        return (
            <div>
            {nodes.map(({ displayName, name, link, area, size,  active }, index) => {
                const iconClass = classNames({
                    'graph__icon animate--general': true,
                    [`graph__icon--${size}`]: true,
                    'icon--active': active,
                    'icon--inactive': !active
                });
                return (
                    <a key={name} href={link} target="_blank" title={displayName || name}>
                        <span className={iconClass} style={styles[index]} role="button">
                            <Icon name={name} />
                        </span>
                    </a>
                );
            })}
            </div>
        );
    }
}