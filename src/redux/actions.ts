import { INewCard } from '../types/types';

export const CARDS_USER = 'CARDS_USER';
export const CARD_USER = 'CARD_USER';

function inferLiteralFromString<T extends string>(arg: T) {
  return arg;
}

//список карточек юзера
// export const cardsUser = (date: Array<INewCard>) => {
//   return { type: inferLiteralFromString(CARDS_USER), date };
// };

export const cardsUser = () => {
  return { type: inferLiteralFromString(CARDS_USER) };
};

//данные отправленной формы
export const cardUser = (formData: INewCard) => {
  return { type: inferLiteralFromString(CARD_USER), formData };
};
