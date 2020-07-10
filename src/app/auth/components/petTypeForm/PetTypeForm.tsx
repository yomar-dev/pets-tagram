import React from 'react';
import { useHistory } from 'react-router-dom';

import RegistrationNav from '../registrationNav';

const PetTypeForm = () => {
  let history = useHistory();

  const handleNextStep = () => {
    history.push('/registration/pet-birthdate');
  };

  return (
    <section className="pet-type">
      <RegistrationNav title="Qué tipo de mascota es Bruno?" />

      <form>
        <div className="form-control">
          <label className="form__label">Tipo de mascota</label>
          <input placeholder="ej. Perro, Gato, Loro" className="pets-input" />
        </div>
        <div className="form-control">
          <label className="form__label">Raza</label>
          <input placeholder="ej. Labrador, Angora" className="pets-input" />
        </div>
        <div className="form-control">
          <label className="form__label">Color</label>
          <input placeholder="ej. Verde con punticos" className="pets-input" />
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

export default PetTypeForm;
