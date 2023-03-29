import React, { useState } from 'react';
import './style.css';
import { DataFieldProp } from '../../../types/types';

function validate(value: string) {
  if (value) {
    const today = new Date();
    const enteredValue = new Date(value);
    if (enteredValue.getTime() === today.getTime()) {
      return true;
    } else if (enteredValue.getTime() > today.getTime()) {
      return true;
    } else {
      return false;
    }
  }
  return false;
}

function DataField(props: DataFieldProp) {
  const [value, setValue] = useState(props.value);
  const [valid, setValid] = useState(false);

  return (
    <input
      ref={props.dataFieldRef}
      className="input input_text"
      type="date"
      title="Выберите любой день после текущей даты"
      value={value}
      data-valid={valid}
      onChange={(event) => {
        const currentValue = event.target.value;
        setValue(currentValue);
        setValid(validate(currentValue));
      }}
    />
  );
}

export default DataField;
