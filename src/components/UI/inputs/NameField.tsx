import React from 'react';
import './style.css';

type InameFieldProp = {
  value: string
  ref: React.RefObject<HTMLInputElement>
}

class NameField extends React.Component {
  pattern: string;
  value: any;

  constructor(props: InameFieldProp) {
    super(props);
    let isValid = this.validate(props.value);
    this.state = {value: props.value, valid: isValid};
    this.pattern =
      '([А-Я]{1}[а-яё]{1,19}[ ][А-Я]{1}[а-яё]{1,19}$)|([A-Z]{1}[a-z]{1,19}[ ][A-Z]{1}[a-z]{1,19}$)';
    this.handleChange = this.handleChange.bind(this);
  }

  validate(val: string) {
    if (val) {
      if (val.match(this.pattern) === null) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  handleChange(e: { target: { value: any; }; }) {
    const val = e.target.value;
    const isValid = this.validate(val);
    this.setState({value: val, valid: isValid});
  }

  render() {
    return (
      <input
        className="input input_text"
        placeholder="Ваши имя и фамилия"
        type="text"
        onChange={this.handleChange}
      />
    );
  }
}

export default NameField;
