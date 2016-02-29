import React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';

// Helpers
const redirectIfNot = {
    Works: (nextState, replaceState) => {
        if (nextState.location.pathname === '/'){
            replaceState({
                pathname: '/works',
                query: { name: 'Oneline' }
            })
        }
    }
};

// Components
import App from 'components/App';
import Works from 'components/Works';
import About from 'components/About';

// Export
export default (
    <Route path="/" component={App}>

        <IndexRoute onEnter={redirectIfNot.Works} />

        <Route path="works" component={Works} />
        <Route path="about" component={About} />

        <Redirect from="*" to="works" />

    </Route>
);
