import React from 'react';
import './style.css';
import { IRadioProps } from '../../../types/types';
import MessageErr from '../../message-err/MessageErr';

function RadioButton({ register, isError }: IRadioProps) {
  return (
    <div className="radiobutton">
      <label>
        <input
          type="radio"
          {...register('radioInput', { required: true })}
          value="Мужской"
        />{' '}
        Мужской
      </label>
      <label>
        <input
          type="radio"
          {...register('radioInput', { required: true })}
          value="Женский"
        />{' '}
        Женский
      </label>
      {isError === true ? (
        <MessageErr errorText="Пожалуйста, убедитесь, что поле заполнено" />
      ) : (
        <MessageErr />
      )}
    </div>
  );
}

export default RadioButton;
