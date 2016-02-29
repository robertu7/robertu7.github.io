import React from 'react';
import Jump from 'jump.js';
import { hashHistory } from 'react-router';

// Helpers
import works from './works.json';

// Components
import Work from './Work';

// Export
export default class Works extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.unlisten = hashHistory.listen(location => {
            const { query: { name } } = location;
            name && new Jump().jump(`.work--${name}`, { duration: 700 })
        })
    }
    componentWillUnmount() {
        this.unlisten()
    }
    render() {
        return (
            <div>
                {works.map(item => <Work key={item.info.name} location={this.props.location} {...item} />)}
            </div>
        );
    }
}
