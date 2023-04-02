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

export type INameFieldProp = {
  value: string;
  nameFieldRef: React.RefObject<HTMLInputElement>;
};

export type DataFieldProp = {
  value: string;
  dataFieldRef: React.RefObject<HTMLInputElement>;
};

export type DropDownProp = {
  value: string;
  dropDownRef: React.RefObject<HTMLSelectElement>;
};

export type CheckBoxProp = {
  value: string;
  checkBoxRef: React.RefObject<HTMLDivElement>;
};

export type RadioButtonProp = {
  value: string;
  radioButtonRef: React.RefObject<HTMLInputElement>;
};

export type FileFieldProp = {
  fileFieldRef: React.RefObject<HTMLInputElement>;
};

export type MessageProp = {
  value: string;
  isValid: boolean;
  messagePropRef: React.RefObject<HTMLDivElement>;
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
  userTime: string | undefined;
  userImg: string;
  userAlert: string | null | undefined;
}

interface FormProps {
  updateData: (value: INewCard) => void;
}

export { IGoodsList, IGood, FormProps };
