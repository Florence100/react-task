import React from 'react';
import NameField from '../UI/inputs/NameField';
import DataField from '../UI/inputs/DataField';
import './style.css';

type MyProps = object;
type MyState = { isValid: boolean };

class Form extends React.Component<MyProps, MyState> {
  nameField: React.RefObject<HTMLInputElement>;
  dataField: React.RefObject<HTMLInputElement>;

  constructor(props: MyProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameField = React.createRef<HTMLInputElement>();
    this.dataField = React.createRef<HTMLInputElement>();
  }

  handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (this.nameField.current) {
      console.log(this.nameField.current.state.valid);
    }
    if (this.dataField.current) {
      console.log(this.dataField.current.state.valid);
    }
  }

  render() {
    return (
      <form className="form-questions" onSubmit={this.handleSubmit}>
        <label>
          Ваши имя и фамилия:
          <NameField value="" ref={this.nameField} />
        </label>
        <label>
          Выберите дату доставки:
          <DataField value="" ref={this.dataField} />
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}

export default Form;
