import { UseFormRegister } from 'react-hook-form';

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

export interface CardsGoodProps {
  updateFotoData: (value: Array<Photo>) => void;
}

export interface Photo {
  id: string;
  owner: string;
  secret: string;
  server: string;
  title: string;
  ispublic: string;
  isfriend: string;
  isfamily: string;
}

export interface PhotoId {
  title?: string;
  id?: string;
  primary?: string;
  secret?: string;
  server?: string;
  url?: string;
  view_count?: string;
  comment_count?: string;
}

export interface Request {
  photo: Array<Photo>;
}

export interface GET_Articles {
  photos: Request;
}

export interface GET_Article {
  set?: Array<PhotoId>;
}

export interface IModalProps {
  active: boolean;
  id: string;
  onClose: () => void;
  modal: Array<PhotoId>;
  url: string;
}

export { FormProps };
