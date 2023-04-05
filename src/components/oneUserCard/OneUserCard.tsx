import React from 'react';
import './style.css';
import { UserCardProp } from '../../types/types';

function OneUserCards(props: UserCardProp) {
  return (
    <div className="user-card">
      <div>
        <b>Имя:</b> {props.form.userName}
      </div>
      <div>
        <b>Пол:</b> {props.form.userSex}
      </div>
      <div>
        <b>Дата рождения:</b> {props.form.userDate}
      </div>
      <div>
        <b>Страна:</b> {props.form.userCountry}
      </div>
      <div>
        <b>Фото:</b>
        <div className="user-card__foto">
          <img src={props.form.userImg} alt="foto"></img>
        </div>
      </div>
    </div>
  );
}

export default OneUserCards;
