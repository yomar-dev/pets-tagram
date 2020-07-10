import React from 'react';

import './createAccountForm.scss';
import { useHistory } from 'react-router-dom';

import RegistrationNav from '../registrationNav';

const CreateAccountForm = () => {
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
          <input placeholder="ej. Tommy" className="pets-input" />
        </div>
        <div className="form-control">
          <label className="form__label">Tu correo electrónico</label>
          <input placeholder="ej. nombre@correo.com" className="pets-input" />
        </div>
        <div className="form-control">
          <label className="form__label">Crea una contraseña</label>
          <input type="password" placeholder="⦁⦁⦁⦁⦁⦁⦁⦁" className="pets-input" />
        </div>

        <div className="form-control" onClick={handleNextStep}>
          <button className="pets-btn">Crear cuenta</button>
        </div>
      </form>
    </>
  );
};

export default CreateAccountForm;
