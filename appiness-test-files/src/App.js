import React from 'react';
import './App.css';
import Login from "./components/login";
import { Router, Switch, Route } from "react-router-dom";
import Dashboard from './components/dashboard';
import NocomponentFound from './components/notfound';
import history from './components/history';

export default function App(){
  return(
    <Router history={history}>
          <Switch>
            <Route exact path="/"  component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route component={NocomponentFound}/>
          </Switch>
    </Router>
  )
}
