import React from 'react';
import './style.css';

// function InputText() {
//   return <input className="input input_text" placeholder="Ваши имя и фамилия" type="text" />;
// }
// type MyProps = object;
// type MyState = { value: string };

class InputText extends React.Component {
  private myRef: React.RefObject<HTMLInputElement>;

  value: string;

  isValid: boolean;

  constructor(props: object) {
    super(props);
    this.myRef = React.createRef();
    this.value = '';
    this.isValid = false;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    if (this.myRef.current) {
      this.value = this.myRef.current.value;
      console.log(this.value);
      console.log(this.isValid);
    }
  }

  render() {
    return (
      <input
        ref={this.myRef}
        className="input input_text"
        placeholder="Ваши имя и фамилия"
        type="text"
        onChange={this.handleChange}
      />
    );
  }
}

export default InputText;
