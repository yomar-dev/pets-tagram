import React from 'react';
import { useHistory } from 'react-router-dom';

import './onboarding.scss';
import ilustration from './ilustration.png';

const Onboarding = () => {
  let history = useHistory();

  const goToRegistrationPage = () => {
    history.push('/registration');
  };

  return (
    <section className="onboarding">
      <figure className="onboarding__figure">
        <img src={ilustration} alt="Pet" className="onboarding__figure-img" />
      </figure>

      <h1 className="onboarding__title">Bienvenido a instapets!</h1>

      <p className="onboarding__subtitle">El mejor amigo de tu amigo.</p>

      <footer className="onboarding-footer">
        <button className="pets-btn" onClick={goToRegistrationPage}>
          Crea tu cuenta
        </button>
        <button className="pets-btn pets-btn--secondary">Inicia sesión</button>
      </footer>
    </section>
  );
};

export default Onboarding;
