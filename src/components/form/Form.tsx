import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import NameField from '../UI/inputs/NameField';
import DataField from '../UI/inputs/DataField';
import DropDown from '../UI/dropdown/DropDown';
import CheckBox from '../UI/checkbox/CheckBox';
import RadioButton from '../UI/radioButton/RadioButton';
import FileField from '../UI/filefield/FileField';

import { FormProps, INewCard, IFormValues } from '../../types/types';
import './style.css';

function Form(props: FormProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormValues>({ reValidateMode: 'onSubmit' });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    const newCard: INewCard = {
      userName: data.textInput,
      userDate: data.dateInput,
      userCountry: data.select,
      userSex: data.radioInput,
      userCheckbox: data.checkbox,
      userImg: URL.createObjectURL(data.fileInput[0]),
    };
    props.updateData(newCard);
    alert('Данные успешно сохранены');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-questions">
      <label>
        <p className="label">* Ваше имя:</p>
        <NameField register={register} required={true} isError={errors.textInput ? true : null} />
      </label>
      <label>
        <p className="label">* Пол:</p>
        <RadioButton
          register={register}
          required={true}
          isError={errors.radioInput ? true : null}
        />
      </label>
      <label>
        <p className="label">* Дата рождения:</p>
        <DataField register={register} required={true} isError={errors.dateInput ? true : null} />
      </label>
      <label>
        <p className="label">* Ваша страна:</p>
        <DropDown register={register} required={true} isError={errors.select ? true : null} />
      </label>
      <label>
        <CheckBox register={register} required={true} isError={errors.checkbox ? true : null} />
      </label>
      <label>
        <p className="label">* Загрузить фото:</p>
        <FileField register={register} required={true} isError={errors.fileInput ? true : null} />
      </label>
      <p className="label">* - Поля, обязательные к заполнению</p>
      <button className="button" type="submit">
        Отправить
      </button>
    </form>
  );
}

export default Form;
