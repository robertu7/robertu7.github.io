import React from 'react';
import Jump from 'jump.js';
import { hashHistory } from 'react-router';

const jumpToTarget = targetName => {
    new Jump().jump(document.querySelector(targetName), { duration: 700 });
};

import Footer from './Footer';

export default class App extends React.Component {
    componentDidMount() {
        this.unlisten = hashHistory.listen(location => {
            const sectionName = location.query.name;
            const targetName = `.section--${sectionName}`;

            if (!sectionName) return;

            if (document.querySelector(targetName)) {
                jumpToTarget(targetName);
            } else {
                setTimeout(() => jumpToTarget(targetName));
            }
        });
    }
    componentWillUnmount() {
        this.unlisten();
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
