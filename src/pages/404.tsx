import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>Page 404</h1>
      <Link to="/">GO HOME</Link>
    </>
  );
}

export default NotFound;
