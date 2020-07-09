import React from 'react';

import './uploadImage.scss';
import RegistrationNav from '../registrationNav';

const UploadImage = () => {
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
        <button className="btn-link">Saltar este paso</button>
      </form>

      <footer className="upload-image-footer">
        <button className="btn-primary">Continuar</button>
      </footer>
    </div>
  );
};

export default UploadImage;
