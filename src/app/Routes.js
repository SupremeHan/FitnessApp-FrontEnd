import React from 'react';
import { Route, Switch } from "react-router-dom";
import UserLogin from './components/Auth/UserLogin';
import Home from './components/HomePage/Home';
import Article from './components/ArticlePage/modules/Article';
import User from './components/UserDashboard/User';

const Routes = () => (
    <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path='/login'>
            <UserLogin/>
        </Route>
        <Route path="/user">
            <User/>
        </Route>
        <Route path="/article">
            <Article/>
        </Route>
    </Switch>
);
export default Routes;