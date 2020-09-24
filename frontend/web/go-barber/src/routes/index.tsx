import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../pages/Signin';
import Signup from '../pages/Signup';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={Signup} />
    </Switch>
  );
};

export default Routes;
