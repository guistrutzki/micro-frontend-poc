import React, { FC } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'

import { Login } from './Pages/Login';
import { Dashboard } from './Pages/Dashboard';

const Routes: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard}/>
      <Route exact path="/signin" component={Login}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;