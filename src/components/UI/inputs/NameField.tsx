import React from 'react';
import './style.css';

type INameFieldProp = {
  value: string;
  nameFieldRef: React.RefObject<HTMLInputElement>;
};

type NameFieldState = {
  value: string;
  valid: boolean;
};

class NameField extends React.Component<INameFieldProp, NameFieldState> {
  pattern: string;
  isValid: boolean;
  castomAttr: { 'data-valid': boolean };

  constructor(props: INameFieldProp) {
    super(props);
    this.isValid = this.validate(props.value);
    this.state = { value: props.value, valid: this.isValid };
    this.pattern =
      '([А-Я]{1}[а-яё]{1,19}[ ][А-Я]{1}[а-яё]{1,19}$)|([A-Z]{1}[a-z]{1,19}[ ][A-Z]{1}[a-z]{1,19}$)';
    this.handleChange = this.handleChange.bind(this);
    this.castomAttr = { 'data-valid': this.isValid };
  }

  handleChange(e: { target: { value: string } }) {
    const val = e.target.value;
    this.isValid = this.validate(val);
    this.setState({ value: val, valid: this.isValid });
    this.castomAttr = { 'data-valid': this.isValid };
  }

  validate(val: string) {
    if (val) {
      if (val.match(this.pattern) === null) {
        return false;
      }
      return true;
    }
    return false;
  }

  render() {
    return (
      <input
        ref={this.props.nameFieldRef}
        className="input input_text"
        title="Значение должно состоять из двух слов, написанных со строчной буквы. Слова должны быть разделены пробелом. Количество символов каждого слова - от 2-х до 20."
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        {...this.castomAttr}
      />
    );
  }
}

export default NameField;
