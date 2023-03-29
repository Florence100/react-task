import React, { useState } from 'react';
import './style.css';
import { INameFieldProp } from '../../../types/types';

function validate(currentValue: string, pattern: string) {
  if (currentValue) {
    if (currentValue.match(pattern) === null) {
      return false;
    }
    return true;
  }
  return false;
}

function NameField(props: INameFieldProp) {
  const [value, setValue] = useState(props.value);
  const [valid, setValid] = useState(false);
  const pattern =
    '([А-Я]{1}[а-яё]{1,19}[ ][А-Я]{1}[а-яё]{1,19}$)|([A-Z]{1}[a-z]{1,19}[ ][A-Z]{1}[a-z]{1,19}$)';

  return (
    <input
      ref={props.nameFieldRef}
      className="input input_text"
      title="Значение должно состоять из двух слов, написанных со строчной буквы. Слова должны быть разделены пробелом. Количество символов каждого слова - от 2-х до 20."
      type="text"
      value={value}
      data-valid={valid}
      onChange={(event) => {
        const currentValue = event.target.value;
        setValue(currentValue);
        setValid(validate(currentValue, pattern));
      }}
    />
  );
}

export default NameField;
