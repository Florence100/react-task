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
  userImg: string;
}

interface IForm {
  cards: Array<INewCard>;
}

export { IGoodsList, IGood, IForm };
