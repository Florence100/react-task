import { INewCard } from '../types/types';

export const CARDS_USER = 'CARDS_USER';
export const CARD_USER = 'CARD_USER';
export const SEARCH_VALUE = 'SEARCH_VALUE';

function inferLiteralFromString<T extends string>(arg: T) {
  return arg;
}

export const cardsUser = () => {
  return { type: inferLiteralFromString(CARDS_USER) };
};

export const cardUser = (formData: INewCard) => {
  return { type: inferLiteralFromString(CARD_USER), formData };
};

export const searchValue = (value: string) => {
  return { type: inferLiteralFromString(SEARCH_VALUE), value };
};
