import React, { useState } from 'react';
import './style.css';
import { RadioButtonProp } from '../../../types/types';

function validate(value: string) {
  if (value === 'Да') {
    return true;
  } else {
    return false;
  }
}

function RadioButton(props: RadioButtonProp) {
  const [value, setValue] = useState(props.value);
  const [valid, setValid] = useState(false);

  function handleChange(e: { target: HTMLInputElement }) {
    const currentValue = e.target.value;
    setValid(validate(currentValue));
    setValue(currentValue);
  }

  return (
    <div ref={props.radioButtonRef} className="radiobutton" data-value={value} data-valid={valid}>
      <p className="checkbox-value">
        <label>
          <input type="radio" name="agree" value="Да" onChange={handleChange} /> Да
        </label>
      </p>
      <p className="checkbox-value">
        <label>
          <input type="radio" name="agree" value="Нет" onChange={handleChange} /> Нет
        </label>
      </p>
    </div>
  );
}

export default RadioButton;
