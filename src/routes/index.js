import React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';

// Helpers
import redirectIfNot from './redirectIfNot';

// Components
import App from 'components/App';
import Works from 'components/Works';
import About from 'components/About';

// Export
export default (
    <Route path="/" component={App}>

        <IndexRoute onEnter={redirectIfNot.Works} />

        <Route path="works" component={Works} onEnter={redirectIfNot.ValidWork} />
        <Route path="about" component={About} onEnter={redirectIfNot.ValidAbout} />

        <Redirect from="*" to="works" />

    </Route>
);
