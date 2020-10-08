import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, HashRouter } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AdminLogin from './app/components/Auth/AdminLogin';
import UserLogin from './app/components/Auth/UserLogin';
import Home from './app/components/HomePage/Home';
import Admin from './app/components/AdminDashboard/Admin';
import User from './app/components/UserDashboard/User';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth/admin/login" component={AdminLogin} />
        <Route path="/auth/user/login" component={UserLogin} />
        <Route path="/admin/dashboard" component={Admin} />
        <Route path="/user/dashboard" component={User} />
      </Switch>
    </HashRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
