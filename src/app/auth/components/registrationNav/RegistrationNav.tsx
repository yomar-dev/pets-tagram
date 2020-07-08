import React from 'react';
import './registrationNav.scss';

const RegistrationNav = ({ title = '' }) => {
  return (
    <div className="registration">
      <header className="registration-header">
        <span className="registration-header__left-arrow">&larr;</span>
        <nav className="registration-nav">
          <ul className="registration-nav__menu">
            <li className="registration-nav__item"></li>
            <li className="registration-nav__item"></li>
            <li className="registration-nav__item"></li>
            <li className="registration-nav__item"></li>
            <li className="registration-nav__item"></li>
          </ul>
        </nav>
        <span className="registration-header__right-arrow">&rarr;</span>
      </header>

      {title && <h1 className="registration__title">{title}</h1>}
    </div>
  );
};

export default RegistrationNav;
