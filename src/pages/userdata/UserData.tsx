import React, { useState } from 'react';
import { Form } from '../../components/form/Form';
import './style.css';
import { IFormState, INewCard } from '../../types/types';
import PopUp from '../../components/userCard/UserCard';

function UserData () {
  const newCardArray: Array<INewCard> = [];
  const [formData, setFormData] = useState(newCardArray);

  function updateData (newCard: INewCard) {
    console.log('newCard', newCard)
    newCardArray.push(newCard);
    setFormData(newCardArray);
    setTimeout(() => {
      console.log('formData', formData);
    }, 1000);
  };

  return (
    <div className="wrapper">
      <div className="form-container">
        <h3>Пожалуйста, заполните форму</h3>
        <Form updateData={updateData} />
        {/* {this.state.openPopUp ? <PopUp /> : null} */}
      </div>
    </div>
  );
}

export default UserData;
