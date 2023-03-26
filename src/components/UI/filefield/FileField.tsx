import React from 'react';
import './style.css';

type FileFieldProp = {
  //   value: string;
  fileFieldRef: React.RefObject<HTMLInputElement>;
};

type FileFieldState = {
  valid: boolean;
};

class FileField extends React.Component<FileFieldProp, FileFieldState> {
  //   isValid: boolean;
  //   validAttr: { 'data-valid': boolean };

  constructor(props: FileFieldProp) {
    super(props);
    // this.isValid = this.validate(props.value);
    // this.state = { value: props.value, valid: this.isValid };
    this.handleChange = this.handleChange.bind(this);
    // this.validAttr = { 'data-valid': this.isValid };
  }

  handleChange(e: { target: HTMLInputElement }) {
    const val = e.target.value;
    console.log('img:', val);
    // this.isValid = this.validate(val);
    // this.setState({ value: val, valid: this.isValid });
    // this.validAttr = { 'data-valid': this.isValid };
  }

  validate(val: string) {
    // if (val === 'Да') {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  render() {
    return (
      <input
        type="file"
        ref={this.props.fileFieldRef}
        className="filefield"
        name="profile_pic"
        accept=".jpg, .jpeg, .png"
        onChange={this.handleChange}
      ></input>

      //   <div
      //     ref={this.props.fileFieldRef}
      //     className="filefield"
      //     // data-value={this.state.value}
      //     // {...this.validAttr}
      //   </div>
    );
  }
}

export default FileField;
