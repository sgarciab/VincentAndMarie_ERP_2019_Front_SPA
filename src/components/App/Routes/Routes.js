import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../Layout/Landing/Landing';
import Login from '../Auth/Login/Login';
import Register from '../Auth/Register/Register';
import Token from '../Auth/Token/Token';
import Dashboard from '../Dashboard/Dashboard';
import ProductForm from '../Forms/ProductForm';
import PrivateTemplatedRoute from '../common/PrivateTemplatedRoute';

const Routes = (
    <div>
        <Route path="/" exact strict component={Landing} />
        <Route path="/login" exact strict component={Login} />
        <Route path="/token" exact strict component={Token} />
        <Route path="/register" exact strict component={Register} />
        <Switch>
            <PrivateTemplatedRoute path="/dashboard" exact strict   component={Dashboard} />
            <PrivateTemplatedRoute path="/dashboard/proveedores" exact strict  component={Dashboard} />
            <PrivateTemplatedRoute path="/dashboard/productos" exact strict  component={ProductForm} />
            <PrivateTemplatedRoute path="/dashboard/ventas" exact strict  component={Dashboard} />
            <PrivateTemplatedRoute path="/dashboard/test" exact strict component={Dashboard}/>
        </Switch>
    </div>
)

export default Routes;