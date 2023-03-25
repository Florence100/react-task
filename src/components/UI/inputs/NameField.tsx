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

  constructor(props: INameFieldProp) {
    super(props);
    const isValid = this.validate(props.value);
    this.state = { value: props.value, valid: isValid };
    this.pattern =
      '([А-Я]{1}[а-яё]{1,19}[ ][А-Я]{1}[а-яё]{1,19}$)|([A-Z]{1}[a-z]{1,19}[ ][A-Z]{1}[a-z]{1,19}$)';
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: { target: { value: string } }) {
    const val = e.target.value;
    const isValid = this.validate(val);
    this.setState({ value: val, valid: isValid });
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
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

export default NameField;
