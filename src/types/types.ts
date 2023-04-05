import { UseFormRegister } from 'react-hook-form';

type IGoodsList = {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
  category: string;
  images: string[];
}[];

type IGood = {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
  category: string;
  images: string[];
};

export type MessageProp = {
  errorText?: string;
};

export type UserCardsProp = {
  formArr: Array<INewCard>;
};

export type UserCardProp = {
  form: INewCard;
  key: number;
};

export interface INewCard {
  userName: string | undefined;
  userDate: string | undefined;
  userCountry: string | undefined;
  userCheckbox: boolean;
  userSex: string;
  userImg: string;
}

export interface IFormValues {
  textInput: string;
  dateInput: string;
  select: string;
  checkbox: boolean;
  radioInput: string;
  fileInput: FileList;
}

export interface IInputProps {
  register: UseFormRegister<IFormValues>;
  required: boolean;
  isError?: null | true;
}

export interface IDataFieldProps {
  register: UseFormRegister<IFormValues>;
  required: boolean;
  isError?: null | true;
}

export interface IDropdownProps {
  register: UseFormRegister<IFormValues>;
  required: boolean;
  isError?: null | true;
}

export interface ICheckBoxProps {
  register: UseFormRegister<IFormValues>;
  required: boolean;
  isError?: null | true;
}

export interface IRadioProps {
  register: UseFormRegister<IFormValues>;
  required: boolean;
  isError?: null | true;
}

export interface IFileFieldProps {
  register: UseFormRegister<IFormValues>;
  required: boolean;
  isError?: null | true;
}

interface FormProps {
  updateData: (value: INewCard) => void;
}

export { IGoodsList, IGood, FormProps };
