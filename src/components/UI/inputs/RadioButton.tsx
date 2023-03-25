import React from 'react';
import './style.css';

type RadioButtonProp = {
  value: string;
  radioButtonRef: React.RefObject<HTMLInputElement>;
};

type RadioButtonState = {
  value: string;
  valid: boolean;
};

class RadioButton extends React.Component<RadioButtonProp, RadioButtonState> {
  isValid: boolean;
  validAttr: { 'data-valid': boolean };

  constructor(props: RadioButtonProp) {
    super(props);
    this.isValid = this.validate(props.value);
    this.state = { value: props.value, valid: this.isValid };
    this.handleChange = this.handleChange.bind(this);
    this.validAttr = { 'data-valid': this.isValid };
  }

  handleChange(e: { target: HTMLInputElement }) {
    const val = e.target.value;
    this.isValid = this.validate(val);
    this.setState({ value: val, valid: this.isValid });
    this.validAttr = { 'data-valid': this.isValid };
  }

  validate(val: string) {
    if (val === 'Да') {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div
        ref={this.props.radioButtonRef}
        className="radiobutton"
        data-value={this.state.value}
        {...this.validAttr}
      >
        <p>
          <label>
            <input type="radio" name="agree" value="Да" onChange={this.handleChange} /> Да
          </label>
        </p>
        <p>
          <label>
            <input type="radio" name="agree" value="Нет" onChange={this.handleChange} /> Нет
          </label>
        </p>
      </div>
    );
  }
}

export default RadioButton;
