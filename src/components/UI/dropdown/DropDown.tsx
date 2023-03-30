import React, { useState } from 'react';
import './style.css';
import { DropDownProp } from '../../../types/types';

function validate(currentValue: string) {
  if (currentValue) {
    return true;
  } else {
    return false;
  }
}

function DropDown(props: DropDownProp) {
  const [value, setValue] = useState(props.value);
  const [valid, setValid] = useState(false);

  return (
    <select
      ref={props.dropDownRef}
      className="dropdown"
      value={value}
      data-valid={valid}
      onChange={(event) => {
        const currentValue = event.target.value;
        setValue(currentValue);
        setValid(validate(currentValue));
      }}
    >
      <option>10.00-14.00</option>
      <option>14.00-18.00</option>
      <option>18.00-22.00</option>
    </select>
  );
}

export default DropDown;
