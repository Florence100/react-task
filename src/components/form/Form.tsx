import React, { useState } from 'react';
import NameField from '../UI/inputs/NameField';
import DataField from '../UI/inputs/DataField';
import DropDown from '../UI/dropdown/DropDown';
import CheckBox from '../UI/checkbox/CheckBox';
import RadioButton from '../UI/radioButton/RadioButton';
import FileField from '../UI/filefield/FileField';
import MessageErr from '../message-err/MessageErr';
import { FormProps } from '../../types/types';
import './style.css';

function Form(props: FormProps) {
  const nameErr = React.createRef<HTMLDivElement>();
  const dataErr = React.createRef<HTMLDivElement>();
  const checkBoxErr = React.createRef<HTMLDivElement>();
  const nameField = React.createRef<HTMLInputElement>();
  const dataField = React.createRef<HTMLInputElement>();
  const dropDown = React.createRef<HTMLSelectElement>();
  const checkBox = React.createRef<HTMLDivElement>();
  const radioButton = React.createRef<HTMLInputElement>();
  const radioButtonErr = React.createRef<HTMLDivElement>();
  const fileField = React.createRef<HTMLInputElement>();

  const [uniqueID, setUniqueID] = useState(333);
  const [isValid, setIsValid] = useState(false);
  const [nameValid, setNameValid] = useState(true);
  const [dataValid, setDataValid] = useState(true);
  const [checkBoxValid, setCheckBoxValid] = useState(true);
  const [radioButtonValid, setRadioButtonValid] = useState(true);

  function validateField(value: string) {
    if (value === 'true') {
      return true;
    } else {
      return false;
    }
  }

  function validateForm(
    nameValid: boolean,
    dataValid: boolean,
    checkboxValid: boolean,
    radioFieldValid: boolean
  ) {
    if (nameValid && dataValid && checkboxValid && radioFieldValid) {
      setIsValid(true);
      setUniqueID(() => {
        return uniqueID + 1;
      });
      const newCard = {
        userName: nameField.current?.value,
        userDate: dataField.current?.value,
        userTime: dropDown.current?.value,
        userImg: fileField.current?.files?.[0]
          ? URL.createObjectURL(fileField.current?.files?.[0] as Blob)
          : '',
        userAlert: checkBox.current?.getAttribute('data-value'),
      };
      props.updateData(newCard);
      alert('Данные сохранены');
    }
  }

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();

    const nameFieldisValid = validateField(
      (nameField.current as HTMLInputElement).getAttribute('data-valid') as string
    );
    setNameValid(nameFieldisValid);

    const dataFieldisValid = validateField(
      (dataField.current as HTMLInputElement).getAttribute('data-valid') as string
    );
    setDataValid(dataFieldisValid);

    const checkBoxFieldValid = validateField(
      (checkBox.current as HTMLInputElement).getAttribute('data-valid') as string
    );
    setCheckBoxValid(checkBoxFieldValid);

    const radioFieldValid = validateField(
      (radioButton.current as HTMLInputElement).getAttribute('data-valid') as string
    );
    setRadioButtonValid(radioFieldValid);

    validateForm(nameFieldisValid, dataFieldisValid, checkBoxFieldValid, radioFieldValid);
  }

  return (
    <form className="form-questions" onSubmit={handleSubmit} key={uniqueID} data-valid={isValid}>
      <label>
        <p className="label">* Имя и фамилия:</p>
        <NameField value="" nameFieldRef={nameField} />
      </label>
      <MessageErr
        value="Убедитесь в корректности введенных данных"
        isValid={nameValid}
        messagePropRef={nameErr}
      />
      <label>
        <p className="label">* Дата доставки:</p>
        <DataField value="" dataFieldRef={dataField} />
      </label>
      <MessageErr
        value="Убедитесь в корректности введенных данных"
        isValid={dataValid}
        messagePropRef={dataErr}
      />
      <label>
        <p className="label">* Время доставки:</p>
        <DropDown value="10.00-14.00" dropDownRef={dropDown} />
      </label>
      <label>
        <p className="label">* Способ оповещения о доставке:</p>
        <CheckBox value="" checkBoxRef={checkBox} />
      </label>
      <MessageErr
        value="Выберите один или несколько из предложенных вариантов"
        isValid={checkBoxValid}
        messagePropRef={checkBoxErr}
      />
      <label>
        <p className="label">* Согласие на обработку персональных данных:</p>
        <RadioButton value="false" radioButtonRef={radioButton} />
      </label>
      <MessageErr
        value="Необходимо согласие на обработку данных"
        isValid={radioButtonValid}
        messagePropRef={radioButtonErr}
      />
      <label>
        <p className="label">Загрузить фото:</p>
        <FileField fileFieldRef={fileField} />
      </label>
      <p>* - Поля, обязательные к заполнению</p>
      <br />
      <button className="button" type="submit">
        Отправить
      </button>
    </form>
  );
}

export { Form };
