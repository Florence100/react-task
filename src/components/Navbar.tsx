import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';

function Navbar() {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__nav">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'header__link-active' : 'header__link')}
          >
            Главная
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) => (isActive ? 'header__link-active' : 'header__link')}
          >
            О нас
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
