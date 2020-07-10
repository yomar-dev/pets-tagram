import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from 'app/auth/pages/login';
import Registration from 'app/auth/pages/registration';
import Feed from 'app/home/components/feed';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/" component={Feed} />
        </Switch>
      </div>
    </Router>
  );
};
