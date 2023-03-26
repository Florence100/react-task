import React from 'react';
import './style.css';

type DataFieldProp = {
  value: string;
  dataFieldRef: React.RefObject<HTMLInputElement>;
};

type NameFieldState = {
  value: string;
  valid: boolean;
};

class DataField extends React.Component<DataFieldProp, NameFieldState> {
  isValid: boolean;
  castomAttr: { 'data-valid': boolean };
  constructor(props: DataFieldProp) {
    super(props);
    this.isValid = this.validate(props.value);
    this.state = { value: props.value, valid: this.isValid };
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
      const today = new Date();
      const formValue = new Date(val);
      if (formValue.getTime() === today.getTime()) {
        return true;
      } else if (formValue.getTime() > today.getTime()) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  render() {
    return (
      <input
        ref={this.props.dataFieldRef}
        className="input input_text"
        type="date"
        title="Выберите любой день после текущей даты"
        value={this.state.value}
        onChange={this.handleChange}
        {...this.castomAttr}
      />
    );
  }
}

export default DataField;
