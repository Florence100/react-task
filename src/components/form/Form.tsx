import React from 'react';
import InputText from '../UI/inputs/InputText';
import './style.css';

type MyProps = object;
type MyState = { isValid: boolean };

class Form extends React.Component<MyProps, MyState> {
  constructor(props: object) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { isValid: false };
  }

  handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (this.state.isValid === true) {
      console.log('form is valid');
    } else {
      console.log('form is invalid');
    }
  }

  render() {
    return (
      <form className="form-questions" onSubmit={this.handleSubmit}>
        <InputText />
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}

export default Form;
