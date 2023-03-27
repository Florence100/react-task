import React from 'react';
import './style.css';

type CheckBoxProp = {
  value: string;
  checkBoxRef: React.RefObject<HTMLInputElement>;
};

type CheckBoxState = {
  value: string;
  valid: boolean;
};

class CheckBox extends React.Component<CheckBoxProp, CheckBoxState> {
  isValid: boolean;
  validAttr: { 'data-valid': boolean };
  valueAttr: string;
  valueList: Array<string>;

  constructor(props: CheckBoxProp) {
    super(props);
    this.isValid = this.validate(props.value);
    this.state = { value: props.value, valid: this.isValid };
    this.handleChange = this.handleChange.bind(this);
    this.validAttr = { 'data-valid': this.isValid };
    this.valueAttr = '';
    this.valueList = [];
  }

  handleChange(e: { target: HTMLInputElement }) {
    if (this.valueList.includes(e.target.value)) {
      const index = this.valueList.indexOf(e.target.value);
      this.valueList.splice(index, 1);
    } else {
      this.valueList.push(e.target.value);
    }
    const val = this.valueList.join(', ');
    this.isValid = this.validate(val);
    this.setState({ value: val, valid: this.isValid });
    this.validAttr = { 'data-valid': this.isValid };
    this.valueAttr = this.valueList.join(', ');
  }

  validate(val: string) {
    if (val) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div
        ref={this.props.checkBoxRef}
        className="checkbox"
        data-value={this.state.value}
        {...this.validAttr}
      >
        <p className="checkbox-value">
          <input
            type="checkbox"
            className="input-checkbox"
            value="Звонок по телефону"
            onChange={this.handleChange}
          />
          Звонок по по телефону
        </p>
        <p className="checkbox-value">
          <input
            type="checkbox"
            className="input-checkbox"
            value="Оповещение через е-mail"
            onChange={this.handleChange}
          />
          Оповещение через е-mail
        </p>
        <p className="checkbox-value">
          <input
            type="checkbox"
            className="input-checkbox"
            value="Оповещение посредтвом Viber/Telegram"
            onChange={this.handleChange}
          />
          Оповещение посредством Viber/Telegram
        </p>
      </div>
    );
  }
}

export default CheckBox;
