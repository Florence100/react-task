import React from 'react';
import './style.css';

type FileFieldProp = {
  fileFieldRef: React.RefObject<HTMLInputElement>;
};

type FileFieldState = {
  valid: boolean;
};

class FileField extends React.Component<FileFieldProp, FileFieldState> {
  constructor(props: FileFieldProp) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: { target: HTMLInputElement }) {
    const val = e.target.value;
    console.log('img:', val);
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
    );
  }
}

export default FileField;
