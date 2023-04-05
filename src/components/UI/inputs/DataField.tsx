import React from 'react';
import './style.css';
import { IDataFieldProps } from '../../../types/types';
import MessageErr from '../../message-err/MessageErr';

function DataField({ register, isError }: IDataFieldProps) {
  return (
    <>
      <input
        {...register('dateInput', { required: true })}
        className="input input_text"
        type="date"
      />
      {isError === true ? (
        <MessageErr errorText="Пожалуйста, убедитесь, что поле заполнено" />
      ) : (
        <MessageErr />
      )}
    </>
  );
}

export default DataField;
