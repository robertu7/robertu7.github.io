import React from 'react';
import Jump from 'jump.js';
import { hashHistory } from 'react-router';

import Footer from './Footer';

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.unlisten = hashHistory.listen(location => {
            const sectionName = location.query.name;

            sectionName && new Jump().jump(`.section--${sectionName}`, { duration: 700 })
        })
    }
    componentWillUnmount() {
        this.unlisten()
    }
    render() {
        const { location, children } = this.props;
        return (
            <div>
                {children}
                <Footer location={location} />
            </div>
        );
    }
}