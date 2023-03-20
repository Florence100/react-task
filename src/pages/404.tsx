import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/404.css';

function NotFound() {
  return (
    <div className="wrapper">
      <h3 className="title">Здесь будет страница 404</h3>
      <div className="links">
        <Link to="/">На главную</Link>
        <Link to="/about">О нас</Link>
      </div>
    </div>
  );
}

export default NotFound;
