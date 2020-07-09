import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import './registration.scss';
import CreateAccount from 'app/auth/components/createAccount';
import UploadImage from 'app/auth/components/uploadImage';
import Nickname from 'app/auth/components/nickname';

const Registration = () => {
  let { path } = useRouteMatch();

  return (
    <div className="registration">
      <Switch>
        <Route exact path={`${path}/upload-image`}>
          <UploadImage />
        </Route>
        <Route exact path={`${path}/nickname`}>
          <Nickname />
        </Route>
        <Route path={path}>
          <CreateAccount />
        </Route>
      </Switch>
    </div>
  );
};

export default Registration;
