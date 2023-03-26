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
type MyState = {
  isValid: boolean;
  nameValid: boolean;
  dataValid: boolean;
  checkBoxValid: boolean;
  radioButtonValid: boolean;
};

class Form extends React.Component<MyProps, MyState> {
  nameField: React.RefObject<HTMLInputElement>;
  dataField: React.RefObject<HTMLInputElement>;
  dropDown: React.RefObject<HTMLSelectElement>;
  checkBox: React.RefObject<HTMLInputElement>;
  radioButton: React.RefObject<HTMLInputElement>;
  fileField: React.RefObject<HTMLInputElement>;

  nameErr: React.RefObject<HTMLDivElement>;
  dataErr: React.RefObject<HTMLDivElement>;
  checkBoxErr: React.RefObject<HTMLDivElement>;
  radioButtonErr: React.RefObject<HTMLDivElement>;

  state = {
    isValid: false,
    nameValid: true,
    dataValid: true,
    checkBoxValid: true,
    radioButtonValid: true,
  };

  constructor(props: MyProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameField = React.createRef<HTMLInputElement>();
    this.dataField = React.createRef<HTMLInputElement>();
    this.dropDown = React.createRef<HTMLSelectElement>();
    this.checkBox = React.createRef<HTMLInputElement>();
    this.radioButton = React.createRef<HTMLInputElement>();
    this.fileField = React.createRef<HTMLInputElement>();
    this.nameErr = React.createRef<HTMLDivElement>();
    this.dataErr = React.createRef<HTMLDivElement>();
    this.checkBoxErr = React.createRef<HTMLDivElement>();
    this.radioButtonErr = React.createRef<HTMLDivElement>();
  }

  handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (this.nameField.current) {
      if (this.nameField.current.getAttribute('data-valid') === 'true') {
        this.setState({ nameValid: true });
      } else {
        this.setState({ nameValid: false });
      }
    }
    if (this.dataField.current) {
      if (this.dataField.current.getAttribute('data-valid') === 'true') {
        this.setState({ dataValid: true });
      } else {
        this.setState({ dataValid: false });
      }
    }
    if (this.dropDown.current) {
      // console.log('dropDown', this.dropDown.current.getAttribute('data-valid'));
      // console.log('dropDown', this.dropDown.current.value);
    }
    if (this.checkBox.current) {
      // console.log(this.checkBox.current.getAttribute('data-valid'));
      // console.log('value', this.checkBox.current.getAttribute('data-value'));
      if (this.checkBox.current.getAttribute('data-valid') === 'true') {
        this.setState({ checkBoxValid: true });
      } else {
        this.setState({ checkBoxValid: false });
      }
    }
    if (this.radioButton.current) {
      // console.log(this.radioButton.current.getAttribute('data-valid'));
      if (this.radioButton.current.getAttribute('data-valid') === 'true') {
        this.setState({ radioButtonValid: true });
      } else {
        this.setState({ radioButtonValid: false });
      }
    }
    if (
      (this.nameField.current as HTMLInputElement).getAttribute('data-valid') === 'true' &&
      (this.dataField.current as HTMLInputElement).getAttribute('data-valid') === 'true' &&
      (this.checkBox.current as HTMLInputElement).getAttribute('data-valid') === 'true' &&
      (this.radioButton.current as HTMLInputElement).getAttribute('data-valid') === 'true'
    ) {
      alert('Ваши данные сохранены');
    }
  }

  render() {
    return (
      <form className="form-questions" onSubmit={this.handleSubmit}>
        <label>
          <p className="label">Имя и фамилия:</p>
          <NameField value="" nameFieldRef={this.nameField} />
        </label>
        <MessageErr
          value="Убедитесь в корректности введенных данных"
          isValid={this.state.nameValid}
          messagePropRef={this.nameErr}
        />
        <label>
          <p className="label">Дата доставки:</p>
          <DataField value="" dataFieldRef={this.dataField} />
        </label>
        <MessageErr
          value="Убедитесь в корректности введенных данных"
          isValid={this.state.dataValid}
          messagePropRef={this.dataErr}
        />
        <label>
          <p className="label">Время доставки:</p>
          <DropDown value="10.00-14.00" dropDownRef={this.dropDown} />
        </label>
        <label>
          <p className="label">Способ оповещения о доставке:</p>
          <CheckBox value="" checkBoxRef={this.checkBox} />
        </label>
        <MessageErr
          value="Выберите один или несколько из предложенных вариантов"
          isValid={this.state.checkBoxValid}
          messagePropRef={this.checkBoxErr}
        />
        <label>
          <p className="label">Согласие на обработку персональных данных:</p>
          <RadioButton value="false" radioButtonRef={this.radioButton} />
        </label>
        <MessageErr
          value="Необходимо согласие на обработку данных"
          isValid={this.state.radioButtonValid}
          messagePropRef={this.radioButtonErr}
        />
        <label>
          <p className="label">Загрузить фото:</p>
          <FileField fileFieldRef={this.fileField} />
        </label>
        <br />
        <button className="button" type="submit">
          Отправить
        </button>
      </form>
    );
  }
}

export default Form;
