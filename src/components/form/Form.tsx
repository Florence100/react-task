import React from 'react';
import NameField from '../UI/inputs/NameField';
import './style.css';

type MyProps = object;
type MyState = { isValid: boolean };

class Form extends React.Component<MyProps, MyState> {
  nameField: React.RefObject<HTMLInputElement>;
  value: string | undefined;


  constructor(props: object) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameField = React.createRef();
    // this.state = { isValid: false };
  }

  handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    const name = this.nameField.current;
    console.log(name)
    // if (this.state.isValid === true) {
    //   console.log('form is valid');
    // } else {
    //   console.log('form is invalid');
    // }
  }

  render() {
    return (
      <form className="form-questions" onSubmit={this.handleSubmit}>
        <NameField value="" ref={this.nameField} />
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}

export default Form;
