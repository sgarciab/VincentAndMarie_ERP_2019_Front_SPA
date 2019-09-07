import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../Layout/Landing/Landing';
import Login from '../Auth/Login/Login';
import Register from '../Auth/Register/Register';
import Token from '../Auth/Token/Token';
import Dashboard from '../Dashboard/Dashboard';
import PrivateRoute from '../common/PrivateRoute';

const Routes = (
    <div>
        <Route path="/" exact strict component={Landing} />
        <Route path="/login" exact strict component={Login} />
        <Route path="/token" exact strict component={Token} />
        <Route path="/register" exact strict component={Register} />
        <Switch>
            <PrivateRoute path="/dashboard" exact strict component={Dashboard} />
        </Switch>
    </div>
)

export default Routes;