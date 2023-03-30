import React, { useState } from 'react';
import './style.css';
import { FileFieldProp } from '../../../types/types';

function validate(value: string) {
  const pattern = '((.jpg|.jpeg|.png)$)';
  if (value) {
    console.log(value);
    if (value.match(pattern) === null) {
      return false;
    }
    return true;
  }
  return false;
}

function FileField(props: FileFieldProp) {
  const [valid, setValid] = useState(false);
  const [value, setValue] = useState('');

  return (
    <input
      type="file"
      ref={props.fileFieldRef}
      className="filefield"
      name="profile_pic"
      accept=".jpg, .jpeg, .png"
      data-value={value}
      data-valid={valid}
      onChange={(event) => {
        const currentValue = event.target.value;
        setValue(currentValue);
        setValid(validate(currentValue));
      }}
    ></input>
  );
}

export default FileField;
