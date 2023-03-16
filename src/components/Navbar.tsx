import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__nav">
          <Link to="/">Home</Link>
          <Link to="about">About as</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
