import React from 'react';
import { useHistory } from 'react-router-dom';

import './petType.scss';
import RegistrationNav from '../registrationNav';
import Input from 'app/shared/components/input';

const PetType = () => {
  let history = useHistory();

  const handleNextStep = () => {
    history.push('/registration/upload-image');
  };

  return (
    <section className="pet-type">
      <RegistrationNav title="Qué tipo de mascota es Bruno?" />

      <form>
        <div className="form-control">
          <label className="form__label">Tipo de mascota</label>
          <Input placeholder="ej. Perro, Gato, Loro" />
        </div>
        <div className="form-control">
          <label className="form__label">Raza</label>
          <Input placeholder="ej. Labrador, Angora" />
        </div>
        <div className="form-control">
          <label className="form__label">Color</label>
          <Input placeholder="ej. Verde con punticos" />
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

export default PetType;
