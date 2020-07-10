import React from 'react';
import { NavLink } from 'react-router-dom';

import './registrationNav.scss';

const RegistrationNav = ({ title = '' }) => {
  return (
    <div>
      <header className="registration-header">
        <span className="registration-header__left-arrow">&larr;</span>
        <nav className="registration-nav">
          <ul className="registration-nav__menu">
            <NavLink
              exact
              to="/registration"
              className="registration-nav__item"
              activeClassName="registration-nav__item--active"
            ></NavLink>
            <NavLink
              to="upload-image"
              className="registration-nav__item"
              activeClassName="registration-nav__item--active"
            ></NavLink>
            <NavLink
              to="nickname"
              className="registration-nav__item"
              activeClassName="registration-nav__item--active"
            ></NavLink>
            <NavLink
              to="pet-type"
              className="registration-nav__item"
              activeClassName="registration-nav__item--active"
            ></NavLink>
            <NavLink
              to="pet-birthdate"
              className="registration-nav__item"
              activeClassName="registration-nav__item--active"
            ></NavLink>
          </ul>
        </nav>
        <span className="registration-header__right-arrow">&rarr;</span>
      </header>

      {title && <h1 className="registration__title">{title}</h1>}
    </div>
  );
};

export default RegistrationNav;
