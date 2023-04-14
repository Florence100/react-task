import React from 'react';
import Form from '../../components/form/Form';
import './style.css';
import UserCard from '../../components/userCards/UserCards';

function UserData() {
  return (
    <div className="wrapper">
      <div className="form-container">
        <h3>Пожалуйста, заполните форму</h3>
        <Form />
        <UserCard />
      </div>
    </div>
  );
}

export default UserData;
