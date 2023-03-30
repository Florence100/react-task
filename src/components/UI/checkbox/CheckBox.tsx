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

function CheckBox (props: CheckBoxProp) {
  const arr: Array<string> = [];
  const [value, setValue] = useState(props.value);
  const [valid, setValid] = useState(false);
  const [valueList, setValueList] = useState(arr);

  function handleChange(event: { target: { value: string }; }) {
    let list = valueList;
    if (valueList.includes(event.target.value)){
      const index = valueList.indexOf(event.target.value);
      list.splice(index, 1);
    } else {
      list.push(event.target.value);
    }
    setValueList(list);
    setTimeout(() => {
      console.log(valueList.join(', '));
    }, 500)
    setValue(valueList.join(', '));
    setValid(validate(valueList.join(', ')));
  }

  return (
    <div
      ref={props.checkBoxRef}
      className="checkbox"
      data-value={value}
      data-valid={valid}
    >
      <p className="checkbox-value">
        <input
          type="checkbox"
          className="input-checkbox"
          value="Звонок по телефону"
          onChange={handleChange}
        />
        Звонок по по телефону
      </p>
      <p className="checkbox-value">
        <input
          type="checkbox"
          className="input-checkbox"
          value="Оповещение через е-mail"
          onChange={handleChange}
        />
        Оповещение через е-mail
      </p>
      <p className="checkbox-value">
        <input
          type="checkbox"
          className="input-checkbox"
          value="Оповещение посредтвом Viber/Telegram"
          onChange={handleChange}
        />
        Оповещение посредством Viber/Telegram
      </p>
    </div>
  );
}

export default CheckBox;
