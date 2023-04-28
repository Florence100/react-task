import React from 'react';
import './style.css';
import { ICheckBoxProps } from '../../../types/types';
import MessageErr from '../../message-err/MessageErr';

function CheckBox({ register, isError }: ICheckBoxProps) {
  return (
    <>
      <div className="checkbox">
        <p className="checkbox-value">
          <label>
            <input
              {...register('checkbox', { required: true })}
              type="checkbox"
              className="input-checkbox"
              value="Согласие на обработку персональных данных"
            />
            * Согласие на обработку персональных данных
          </label>
        </p>
      </div>
      {isError === true ? (
        <MessageErr errorText="Необходимо согласие на обработку персональных данных" />
      ) : (
        <MessageErr />
      )}
    </>
  );
}

export default CheckBox;
