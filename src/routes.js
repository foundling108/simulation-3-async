import React from "react";
import { Switch, Route } from "react-router-dom";

import Auth from './components/Auth/Auth';
import Dash from './components/Dash/Dash';
import Profile from './components/Profile/Profile';
import Search from './components/Search/Search';

export default (
    <Switch>
        <Route component={Auth} path='/' exact/>
        <Route component={Dash} path='/dash' exact/>
        <Route component={Profile} path='/profile' exact/>
        <Route component={Search} path='/search' exact/>
    </Switch>
)