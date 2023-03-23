import React from 'react';
import './style.css';

// function InputText() {
//   return <input className="input input_text" placeholder="Ваши имя и фамилия" type="text" />;
// }
// type MyProps = object;
// type MyState = { value: string };

class InputText extends React.Component {
  myRef: React.RefObject<HTMLInputElement>;

  value: string;

  pattern: string;

  isValid: boolean;

  constructor(props: object) {
    super(props);
    this.myRef = React.createRef();
    this.value = '';
    this.isValid = false;
    this.pattern =
      '([А-Я]{1}[а-яё]{1,19}[ ][А-Я]{1}[а-яё]{1,19}$)|([A-Z]{1}[a-z]{1,19}[ ][A-Z]{1}[a-z]{1,19}$)';
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    if (this.myRef.current) {
      this.value = this.myRef.current.value;
      if (this.value.match(this.pattern) === null) {
        this.isValid = false;
        console.log('Значение невалидно!');
      } else {
        this.isValid = true;
        console.log('Значение валидно!');
      }
    }
  }

  render() {
    return (
      <input
        ref={this.myRef}
        className="input input_text"
        placeholder="Ваши имя и фамилия"
        type="text"
        onChange={this.handleChange}
        data-valid={this.isValid}
      />
    );
  }
}

// перенести проверку isValid в форму?

export default InputText;
