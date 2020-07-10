import React from 'react';

import './createAccount.scss';
import Input from 'app/shared/components/input';
import { useHistory } from 'react-router-dom';

import RegistrationNav from '../registrationNav';

const CreateAccount = () => {
  let history = useHistory();

  const handleNextStep = () => {
    history.push('/registration/upload-image');
  };

  return (
    <>
      <RegistrationNav title="Crea la cuenta de tu mascota." />

      <form>
        <div className="form-control">
          <label className="form__label">Nombre de tu mascota</label>
          <Input placeholder={'ej. Tommy'} />
        </div>
        <div className="form-control">
          <label className="form__label">Tu correo electrónico</label>
          <Input placeholder={'ej. nombre@correo.com'} />
        </div>
        <div className="form-control">
          <label className="form__label">Crea una contraseña</label>
          <Input type="password" placeholder="⦁⦁⦁⦁⦁⦁⦁⦁" />
        </div>

        <div className="form-control" onClick={handleNextStep}>
          <button className="pets-btn">Crear cuenta</button>
        </div>
      </form>
    </>
  );
};

export default CreateAccount;
