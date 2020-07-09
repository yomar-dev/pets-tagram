import React from 'react';
import { useHistory } from 'react-router-dom';

import RegistrationNav from '../registrationNav';
import Input from 'app/shared/components/input';
import Button from 'app/shared/components/button';

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
          <Input placeholder="ej. Apodo" />
        </div>
        <div className="form-control">
          <label className="form__label">Sugerencias</label>
          <Input value="Brunoelbonito" />
          <br />
          <Input value="Bruno1234" />
        </div>
        <div className="form-control" onClick={handleNextStep}>
          <Button>Continuar</Button>
        </div>
      </form>
    </section>
  );
};

export default Nickname;
