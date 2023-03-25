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
  constructor(props: DataFieldProp) {
    super(props);
    const isValid = this.validate(props.value);
    this.state = { value: props.value, valid: isValid };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: { target: { value: string } }) {
    const val = e.target.value;
    const isValid = this.validate(val);
    this.setState({ value: val, valid: isValid });
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
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

export default DataField;
