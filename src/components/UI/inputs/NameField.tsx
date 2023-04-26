import React from 'react';
import './style.css';
import { IInputProps } from '../../../types/types';
import MessageErr from '../../message-err/MessageErr';

function NameField({ register, isError }: IInputProps) {
  return (
    <>
      <input
        {...register('textInput', { required: true })}
        className="input input_text"
        type="text"
        data-test="input-name"
      />
      {isError === true ? (
        <MessageErr errorText="Пожалуйста, убедитесь, что поле заполнено" />
      ) : (
        <MessageErr />
      )}
    </>
  );
}

export default NameField;
