import React from 'react';
import './style.css';
import { IDropdownProps } from '../../../types/types';
import MessageErr from '../../message-err/MessageErr';

function DropDown({ register, isError }: IDropdownProps) {
  return (
    <>
      <select {...register('select', { required: true })} className="dropdown">
        <option>Беларусь</option>
        <option>Россия</option>
        <option>Украина</option>
        <option>Польша</option>
      </select>
      {isError === true ? (
        <MessageErr errorText="Пожалуйста, убедитесь, что поле заполнено" />
      ) : (
        <MessageErr />
      )}
    </>
  );
}

export default DropDown;
