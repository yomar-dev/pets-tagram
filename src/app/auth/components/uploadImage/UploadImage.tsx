import React from 'react';

import './uploadImage.scss';
import RegistrationNav from '../registrationNav';
import { useHistory } from 'react-router-dom';

const UploadImage = () => {
  let history = useHistory();

  const handleNextStep = () => {
    history.push('/registration/nickname');
  };

  return (
    <div className="upload-image">
      <RegistrationNav title="Agrega una imagen de tu mascota." />

      <form className="upload-image-form">
        <figure className="upload-image-form__preview">
          <img
            src="https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg"
            alt="Preview"
            className="upload-image-form__preview-img"
          />
        </figure>

        <button className="btn-outline">Examinar fotos</button>
        <button className="btn-link" onClick={handleNextStep}>
          Saltar este paso
        </button>
      </form>

      <footer className="upload-image-footer">
        <button className="btn-primary" onClick={handleNextStep}>
          Continuar
        </button>
      </footer>
    </div>
  );
};

export default UploadImage;
