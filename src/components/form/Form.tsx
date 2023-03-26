import React from 'react';
import NameField from '../UI/inputs/NameField';
import DataField from '../UI/inputs/DataField';
import DropDown from '../UI/dropdown/DropDown';
import CheckBox from '../UI/checkbox/CheckBox';
import RadioButton from '../UI/inputs/RadioButton';
import FileField from '../UI/filefield/FileField';
import MessageErr from '../message-err/MessageErr';
import './style.css';

type MyProps = object;
type MyState = { isValid: boolean; nameValid?: boolean };

class Form extends React.Component<MyProps, MyState> {
  nameField: React.RefObject<HTMLInputElement>;
  nameErr: React.RefObject<HTMLDivElement>;
  dataField: React.RefObject<HTMLInputElement>;
  dropDown: React.RefObject<HTMLSelectElement>;
  checkBox: React.RefObject<HTMLInputElement>;
  radioButton: React.RefObject<HTMLInputElement>;
  fileField: React.RefObject<HTMLInputElement>;

  state = { isValid: false, nameValid: true };

  constructor(props: MyProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameField = React.createRef<HTMLInputElement>();
    this.nameErr = React.createRef<HTMLDivElement>();
    this.dataField = React.createRef<HTMLInputElement>();
    this.dropDown = React.createRef<HTMLSelectElement>();
    this.checkBox = React.createRef<HTMLInputElement>();
    this.radioButton = React.createRef<HTMLInputElement>();
    this.fileField = React.createRef<HTMLInputElement>();
  }

  handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (this.nameField.current) {
      console.log(this.nameField.current.getAttribute('data-valid'));
      if (this.nameField.current.getAttribute('data-valid') === 'true') {
        this.setState({ nameValid: true });
      } else {
        this.setState({ nameValid: false });
      }
    }
    if (this.dataField.current) {
      // console.log(this.dataField.current.getAttribute('data-valid'));
    }
    if (this.dropDown.current) {
      // console.log(this.dropDown.current.getAttribute('data-valid'));
      // console.log(this.dropDown.current.value);
    }
    if (this.checkBox.current) {
      // console.log(this.checkBox.current.getAttribute('data-valid'));
      // console.log('value', this.checkBox.current.getAttribute('data-value'));
    }
    if (this.radioButton.current) {
      // console.log(this.radioButton.current.getAttribute('data-valid'));
    }
  }

  render() {
    return (
      <form className="form-questions" onSubmit={this.handleSubmit}>
        <label>
          <p>Ваши имя и фамилия:</p>
          <NameField value="" nameFieldRef={this.nameField} />
        </label>
        <MessageErr
          value="Убедитесь в корректности введенных данных"
          isValid={this.state.nameValid}
          messagePropRef={this.nameErr}
        />
        <label>
          <p>Выберите дату доставки:</p>
          <DataField value="" dataFieldRef={this.dataField} />
        </label>
        <label>
          <p>Выберите время доставки:</p>
          <DropDown value="" dropDownRef={this.dropDown} />
        </label>
        <label>
          <p>Способ оповещения:</p>
          <CheckBox value="" checkBoxRef={this.checkBox} />
        </label>
        <label>
          <p>Даю согласие на обработку персональных данных:</p>
          <RadioButton value="false" radioButtonRef={this.radioButton} />
        </label>
        <label>
          <p>Загрузить фото:</p>
          <FileField fileFieldRef={this.fileField} />
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}

export default Form;
