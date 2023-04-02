import React from 'react';
import './style.css';
import { UserCardProp } from '../../types/types';

function OneUserCards(props: UserCardProp) {
  if (props.form.userImg) {
    return (
      <div className="user-card">
        <div>
          <b>Имя:</b> {props.form.userName}
        </div>
        <div>
          <b>Дата доставки:</b> {props.form.userDate}
        </div>
        <div>
          <b>Время доставки:</b> {props.form.userTime}
        </div>
        <div>
          <b>Способ оповещения о доставке:</b> {props.form.userAlert}
        </div>
        <div>
          <b>Фото:</b>
          <div className="user-card__foto">
            <img src={props.form.userImg} alt="foto"></img>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="user-card">
        <div>
          <b>Имя:</b> {props.form.userName}
        </div>
        <div>
          <b>Дата доставки:</b> {props.form.userDate}
        </div>
        <div>
          <b>Время доставки:</b> {props.form.userTime}
        </div>
        <div>
          <b>Способ оповещения о доставке:</b> {props.form.userAlert}
        </div>
      </div>
    );
  }
}

export default OneUserCards;
