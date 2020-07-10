import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import './registration.scss';
import CreateAccountForm from 'app/auth/components/createAccountForm';
import UploadImageForm from 'app/auth/components/uploadImageForm';
import NicknameForm from 'app/auth/components/nicknameForm';
import PetTypeForm from 'app/auth/components/petTypeForm';
import PetBirthdateForm from 'app/auth/components/petBirthtdateForm';

const Registration = () => {
  let { path } = useRouteMatch();

  return (
    <div className="registration">
      <Switch>
        <Route exact path={`${path}/upload-image`}>
          <UploadImageForm />
        </Route>
        <Route exact path={`${path}/nickname`}>
          <NicknameForm />
        </Route>
        <Route exact path={`${path}/pet-type`}>
          <PetTypeForm />
        </Route>
        <Route exact path={`${path}/pet-birthdate`}>
          <PetBirthdateForm />
        </Route>
        <Route path={path}>
          <CreateAccountForm />
        </Route>
      </Switch>
    </div>
  );
};

export default Registration;
