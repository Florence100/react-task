import React from 'react';
import './style.css';
import { IFileFieldProps } from '../../../types/types';
import MessageErr from '../../message-err/MessageErr';

function FileField({ register, isError }: IFileFieldProps) {
  return (
    <div>
      <input
        type="file"
        className="filefield"
        data-test="filefield"
        accept=".jpg, .jpeg, .png"
        {...register('fileInput', { required: true })}
      ></input>
      {isError === true ? (
        <MessageErr errorText="Пожалуйста, убедитесь, что файл загружен" />
      ) : (
        <MessageErr />
      )}
    </div>
  );
}

export default FileField;
