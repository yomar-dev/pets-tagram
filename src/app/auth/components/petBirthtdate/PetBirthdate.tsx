import React from 'react';
import { useHistory } from 'react-router-dom';

import './petBirthdate.scss';
import RegistrationNav from '../registrationNav';

const PetBirthdate = () => {
  let history = useHistory();

  const handleNextStep = () => {
    history.push('/registration/pet-birthdate');
  };

  return (
    <section className="pet-type">
      <RegistrationNav title="Cuando cumple Bruno?" />

      <form>
        <div className="form-control">
          <label className="form__label">Fecha de cumpleaños</label>
          <input placeholder="ej. Marzo 4" className="pets-input" />
        </div>
        <div className="form-control">
          <label className="form__label">Años</label>
          <input placeholder="ej. 4" className="pets-input" />
        </div>

        <div className="form-control" onClick={handleNextStep}>
          <button className="btn-primary">Continuar</button>
          <button className="btn-link" onClick={handleNextStep}>
            Saltar este paso
          </button>
        </div>
      </form>
    </section>
  );
};

export default PetBirthdate;
