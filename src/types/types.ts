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
  openPopUp: boolean;
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
