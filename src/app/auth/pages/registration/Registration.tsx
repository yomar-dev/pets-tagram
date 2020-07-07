import React from 'react';
import './registration.scss';
import Input from 'app/shared/components/input';

const Registration = () => {
  return (
    <div className="registration">
      <h1 className="registration__title">Crea la cuenta de tu mascota.</h1>

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
          <Input placeholder={'********'} />
        </div>

        <div className="form-control">
          <button>Crear cuenta</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
