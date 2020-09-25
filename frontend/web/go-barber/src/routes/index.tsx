import React from 'react';
import { Switch } from 'react-router-dom';
import DashBoard from '../pages/Dashboard';
import SignIn from '../pages/Signin';
import Signup from '../pages/Signup';
import Route from './route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={DashBoard} isPrivate />
    </Switch>
  );
};

export default Routes;
