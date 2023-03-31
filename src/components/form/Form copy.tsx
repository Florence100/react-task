import React from 'react';
import NameField from '../UI/inputs/NameField';
import DataField from '../UI/inputs/DataField';
import DropDown from '../UI/dropdown/DropDown';
import CheckBox from '../UI/checkbox/CheckBox';
import RadioButton from '../UI/radioButton/RadioButton';
import FileField from '../UI/filefield/FileField';
import MessageErr from '../message-err/MessageErr';
import { FormProps } from '../../types/types';
import './style.css';

const userInfoArr: Array<object> = [];

type MyState = {
  isValid: boolean;
  nameValid: boolean;
  dataValid: boolean;
  checkBoxValid: boolean;
  radioButtonValid: boolean;
};

class Form extends React.Component<FormProps, MyState> {
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
  uniqueID: number;

  state = {
    isValid: false,
    nameValid: true,
    dataValid: true,
    checkBoxValid: true,
    radioButtonValid: true,
  };

  userCard = {
    userName: '',
    userDate: '',
    userTime: '',
    userAlert: '',
    userAgree: '',
    userImg: '',
  };

  constructor(props: FormProps) {
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
    this.uniqueID = 333;
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
    if (this.checkBox.current) {
      if (this.checkBox.current.getAttribute('data-valid') === 'true') {
        this.setState({ checkBoxValid: true });
      } else {
        this.setState({ checkBoxValid: false });
      }
    }
    if (this.radioButton.current) {
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
      this.userCard = {
        userName: (this.nameField.current as HTMLInputElement).value,
        userDate: (this.dataField.current as HTMLInputElement).value,
        userTime: (this.dropDown.current as HTMLSelectElement).value,
        userAlert: (this.checkBox.current as HTMLInputElement).value,
        userAgree: (this.radioButton.current as HTMLInputElement).value,
        userImg: (this.fileField.current as HTMLInputElement).value
          ? (this.fileField.current as HTMLInputElement).value
          : '',
      };
      userInfoArr.push(this.userCard);
      this.props.updateData(this.userCard);

      // alert(
      //   `Ваши данные сохранены:
      //   Имя - ${this.userCard.userName},
      //   дата доставки - ${this.userCard.userDate},
      //   оповещение о доставке - ${(this.checkBox.current as HTMLInputElement).getAttribute(
      //     'data-value'
      //   )},
      //   время доставки - ${this.userCard.userTime},
      //   согласие на обработку данных - Да,
      //   загруженное фото - ${this.userCard.userImg}`
      // );
      this.uniqueID++;
    }
  }

  render() {
    return (
      <form className="form-questions" onSubmit={this.handleSubmit} key={this.uniqueID}>
        <label>
          <p className="label">* Имя и фамилия:</p>
          <NameField value="" nameFieldRef={this.nameField} />
        </label>
        <MessageErr
          value="Убедитесь в корректности введенных данных"
          isValid={this.state.nameValid}
          messagePropRef={this.nameErr}
        />
        <label>
          <p className="label">* Дата доставки:</p>
          <DataField value="" dataFieldRef={this.dataField} />
        </label>
        <MessageErr
          value="Убедитесь в корректности введенных данных"
          isValid={this.state.dataValid}
          messagePropRef={this.dataErr}
        />
        <label>
          <p className="label">* Время доставки:</p>
          <DropDown value="10.00-14.00" dropDownRef={this.dropDown} />
        </label>
        <label>
          <p className="label">* Способ оповещения о доставке:</p>
          <CheckBox value="" checkBoxRef={this.checkBox} />
        </label>
        <MessageErr
          value="Выберите один или несколько из предложенных вариантов"
          isValid={this.state.checkBoxValid}
          messagePropRef={this.checkBoxErr}
        />
        <label>
          <p className="label">* Согласие на обработку персональных данных:</p>
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
        <p>* - Поля, обязательные к заполнению</p>
        <br />
        <button className="button" type="submit">
          Отправить
        </button>
      </form>
    );
  }
}

export { Form };
