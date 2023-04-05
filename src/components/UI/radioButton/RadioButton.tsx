import React from 'react';
import './style.css';
import { IRadioProps } from '../../../types/types';
import MessageErr from '../../message-err/MessageErr';

function RadioButton({ register, isError }: IRadioProps) {
  return (
    <div className="radiobutton">
      <p className="checkbox-value">
        <label>
          <input
            type="radio"
            {...register('radioInput', { required: true })}
            name="sex"
            value="Мужской"
          />{' '}
          Мужской
        </label>
      </p>
      <p className="checkbox-value">
        <label>
          <input
            type="radio"
            {...register('radioInput', { required: true })}
            name="sex"
            value="Женский"
          />{' '}
          Женский
        </label>
      </p>
      {isError === true ? (
        <MessageErr errorText="Пожалуйста, убедитесь, что поле заполнено" />
      ) : (
        <MessageErr />
      )}
    </div>
  );
}

export default RadioButton;
