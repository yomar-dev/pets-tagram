import React from 'react';
import { useHistory } from 'react-router-dom';

import RegistrationNav from '../registrationNav';

const Nickname = () => {
  let history = useHistory();

  const handleNextStep = () => {
    history.push('/registration/pet-type');
  };

  return (
    <section className="nickname">
      <RegistrationNav title="Crea un nombre único para tu cuenta" />

      <form>
        <div className="form-control">
          <label className="form__label">Nombre de usuario</label>
          <input placeholder="ej. Apodo" className="pets-input" />
        </div>
        <div className="form-control">
          <label className="form__label">Sugerencias</label>
          <input placeholder="Brunoelbonito" className="pets-input" />
          <br />
          <input placeholder="Bruno1234" className="pets-input" />
        </div>
        <div className="form-control" onClick={handleNextStep}>
          <button className="pets-btn">Continuar</button>
        </div>
      </form>
    </section>
  );
};

export default Nickname;
