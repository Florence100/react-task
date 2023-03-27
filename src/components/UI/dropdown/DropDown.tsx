import React from 'react';
import './style.css';

type DropDownProp = {
  value: string;
  dropDownRef: React.RefObject<HTMLSelectElement>;
};

type DropDownState = {
  value: string;
  valid: boolean;
};

class DropDown extends React.Component<DropDownProp, DropDownState> {
  isValid: boolean;
  castomAttr: { 'data-valid': boolean };
  constructor(props: DropDownProp) {
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
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <select
        ref={this.props.dropDownRef}
        className="dropdown"
        value={this.state.value}
        onChange={this.handleChange}
        {...this.castomAttr}
      >
        <option>10.00-14.00</option>
        <option>14.00-18.00</option>
        <option>18.00-22.00</option>
      </select>
    );
  }
}

export default DropDown;
