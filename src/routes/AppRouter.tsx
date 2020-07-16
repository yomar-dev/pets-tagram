import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from 'app/auth/pages/login';
import Registration from 'app/auth/pages/registration';
import Onboarding from 'app/home/pages/onboarding';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/" component={Onboarding} />
        </Switch>
      </div>
    </Router>
  );
};
