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
  checkBoxRef: React.RefObject<HTMLInputElement>;
};

export type RadioButtonProp = {
  value: string;
  radioButtonRef: React.RefObject<HTMLInputElement>;
};

export type FileFieldProp = {
  fileFieldRef: React.RefObject<HTMLInputElement>;
};

interface INewCard {
  userName: string;
  userDate: string;
  userTime: string;
  userAlert: string;
  userAgree: string;
  userImg?: string;
}

interface IFormState {
  cards: Array<INewCard>;
  // openPopUp: boolean;
}

interface FormProps {
  updateData: (value: INewCard) => void;
}

type MyState = {
  isValid: boolean;
  nameValid: boolean;
  dataValid: boolean;
  checkBoxValid: boolean;
  radioButtonValid: boolean;
};

export { IGoodsList, IGood, IFormState, FormProps, MyState, INewCard };
