import React, { useState } from 'react';
import './style.css';
import { CheckBoxProp } from '../../../types/types';

function validate(value: string) {
  if (value) {
    return true;
  } else {
    return false;
  }
}

function CheckBox(props: CheckBoxProp) {
  const arr: Array<string> = [];
  const [value, setValue] = useState(props.value);
  const [valid, setValid] = useState(false);
  const [valueList, setValueList] = useState(arr);

  function handleChange(event: { target: { value: string } }) {
    const list = valueList;
    if (valueList.includes(event.target.value)) {
      const index = valueList.indexOf(event.target.value);
      list.splice(index, 1);
    } else {
      list.push(event.target.value);
    }
    setValueList(list);
    setValue(valueList.join(', '));
    setValid(validate(valueList.join(', ')));
  }

  return (
    <div ref={props.checkBoxRef} className="checkbox" data-value={value} data-valid={valid}>
      <p className="checkbox-value">
        <label>
          <input
            type="checkbox"
            className="input-checkbox"
            value="Звонок по телефону"
            onChange={handleChange}
            id="checkbox-tel"
          />
          Звонок по по телефону
        </label>
      </p>
      <p className="checkbox-value">
        <label>
          <input
            type="checkbox"
            className="input-checkbox"
            value="Оповещение через е-mail"
            onChange={handleChange}
          />
          Оповещение через е-mail
        </label>
      </p>
      <p className="checkbox-value">
        <label>
          <input
            type="checkbox"
            className="input-checkbox"
            value="Оповещение посредтвом Viber/Telegram"
            onChange={handleChange}
          />
          Оповещение посредством Viber/Telegram
        </label>
      </p>
    </div>
  );
}

export default CheckBox;
