import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import './createAccountForm.scss';
import RegistrationNav from '../registrationNav';
import { createAccount, CreateAccountPayload } from 'app/store/register';

const CreateAccountForm = () => {
  const { register, handleSubmit, errors } = useForm<CreateAccountPayload>();
  const dispatch = useDispatch();
  let history = useHistory();

  const onSubmit = (data: any) => {
    dispatch(createAccount(data));
    history.push('/registration/upload-image');
  };

  return (
    <>
      <RegistrationNav title="Crea la cuenta de tu mascota." />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="form__label">Nombre de tu mascota</label>
          <input
            name="name"
            placeholder="ej. Tommy"
            className="pets-input"
            ref={register({ required: 'The password is required' })}
          />
          {errors.name && <p className="form__error">{errors.name.message}</p>}
        </div>
        <div className="form-control">
          <label className="form__label">Tu correo electrónico</label>
          <input
            name="email"
            placeholder="ej. nombre@correo.com"
            className="pets-input"
            ref={register({
              required: 'The email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <p className="form__error">{errors.email.message}</p>}
        </div>
        <div className="form-control">
          <label className="form__label">Crea una contraseña</label>
          <input
            name="password"
            type="password"
            placeholder="⦁⦁⦁⦁⦁⦁⦁⦁"
            className="pets-input"
            ref={register({ required: 'The password is required' })}
          />
          {errors.password && <p className="form__error">{errors.password.message}</p>}
        </div>

        <div className="form-control">
          <button type="submit" className="pets-btn">
            Crear cuenta
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateAccountForm;
