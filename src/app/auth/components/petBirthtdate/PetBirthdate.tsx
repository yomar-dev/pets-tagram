import React from 'react';
import { useHistory } from 'react-router-dom';

import './petBirthdate.scss';
import RegistrationNav from '../registrationNav';
import Input from 'app/shared/components/input';

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
          <Input placeholder="ej. Marzo 4" />
        </div>
        <div className="form-control">
          <label className="form__label">Años</label>
          <Input placeholder="ej. 4" />
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
