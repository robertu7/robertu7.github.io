import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';

// Styles
import './app.css';

// Config
import routes from '../routes';

// Render
ReactDOM.render(
    <Router history={hashHistory}>
        {routes}
    </Router>,
    document.querySelector('.root')
);