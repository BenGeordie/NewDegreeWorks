import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.scss';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import PlanOne from './Dnd/Plan/index'
import NewPlanInput from './Pages/NewPlanInput'

import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/newplaninput" component={NewPlanInput} />
            <Route path="/planone" component={PlanOne} />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
