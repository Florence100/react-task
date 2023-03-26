import React from 'react';
import Form from '../../components/form/Form';
import './style.css';

function UserData() {
  return (
    <div className="wrapper">
      <div className="form-container">
        <h3>Пожалуйста, заполните форму</h3>
        <Form />
      </div>
    </div>
  );
}

export default UserData;
