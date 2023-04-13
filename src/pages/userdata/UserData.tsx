import React from 'react';
import Form from '../../components/form/Form';
import './style.css';
import { IState } from '../../types/types';
import UserCard from '../../components/userCards/UserCards';
import { useDispatch, useSelector } from 'react-redux';

function UserData() {
  const cardsArray = useSelector((state: IState) => state.cardsUser);
  const dispatch = useDispatch();

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
