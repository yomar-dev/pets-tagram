import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './createAccountForm.scss';
import RegistrationNav from '../registrationNav';
import { createAccount } from 'app/store/register';

const CreateAccountForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  let history = useHistory();

  const handleNextStep = (event: FormEvent) => {
    event.preventDefault();
    dispatch(createAccount({ email, name, password }));
    // history.push('/registration/upload-image');
  };

  return (
    <>
      <RegistrationNav title="Crea la cuenta de tu mascota." />

      <form onSubmit={handleNextStep}>
        <div className="form-control">
          <label className="form__label">Nombre de tu mascota</label>
          <input
            placeholder="ej. Tommy"
            className="pets-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="form__label">Tu correo electrónico</label>
          <input
            placeholder="ej. nombre@correo.com"
            className="pets-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="form__label">Crea una contraseña</label>
          <input
            type="password"
            placeholder="⦁⦁⦁⦁⦁⦁⦁⦁"
            className="pets-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-control">
          <button type="submit" className="pets-btn" disabled={!(name && email && password)}>
            Crear cuenta
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateAccountForm;
