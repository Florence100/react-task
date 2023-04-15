import React from 'react';
import './style.css';
import OneUserCard from '../oneUserCard/OneUserCard';
import { IState } from '../../types/types';
import { useSelector } from 'react-redux';

function UserCards() {
  const formArray = useSelector((state: IState) => state.rootReducer.cardsUser);
  const currentKey = function (min: number, max: number) {
    return Math.random() * (max - min) + min;
  };

  if (formArray.length === 0) {
    return (
      <div className="user-cards">
        <h3 className="user-cards-title">У вас пока еще нет карточек</h3>
      </div>
    );
  } else {
    const cards = formArray.map((form) => <OneUserCard key={currentKey(0, 100)} form={form} />);
    return (
      <div className="user-cards">
        <h3 className="user-cards-title">Карточки:</h3>
        <div className="user-cards-box">{cards}</div>
      </div>
    );
  }
}

export default UserCards;
