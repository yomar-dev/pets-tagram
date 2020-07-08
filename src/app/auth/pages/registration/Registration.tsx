import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import './registration.scss';
import CreateAccount from 'app/auth/components/createAccount';

const Registration = () => {
  let { path } = useRouteMatch();

  return (
    <div className="registration">
      <Switch>
        <Route exact path={path}>
          <CreateAccount />
        </Route>
      </Switch>
    </div>
  );
};

export default Registration;
