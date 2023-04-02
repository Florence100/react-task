import React, { useState } from 'react';
import { Form } from '../../components/form/Form';
import './style.css';
import { INewCard } from '../../types/types';
import UserCard from '../../components/userCards/UserCards';

function UserData() {
  const newCardArray: Array<INewCard> = [];
  const [formData, setFormData] = useState(newCardArray);

  function updateData(newCard: INewCard) {
    setFormData([...formData, ...[newCard]]);
  }

  return (
    <div className="wrapper">
      <div className="form-container">
        <h3>Пожалуйста, заполните форму</h3>
        <Form updateData={updateData} />
        <UserCard formArr={formData} />
      </div>
    </div>
  );
}

export default UserData;
