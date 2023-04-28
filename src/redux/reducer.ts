import {
  CARDS_USER,
  CARD_USER,
  SEARCH_VALUE,
  cardsUser,
  cardUser,
  searchValue,
} from '../redux/actions';
import { INewCard } from '../types/types';

const newCardArray: Array<INewCard> = [];
const newCardUser: INewCard = {};
const newSearch = '';
const initialState = { cardsUser: newCardArray, cardUser: newCardUser, search: newSearch };

type ActionsTypes =
  | ReturnType<typeof cardsUser>
  | ReturnType<typeof cardUser>
  | ReturnType<typeof searchValue>;

export default function rootReducer(state = initialState, action: ActionsTypes) {
  if (action.type === CARDS_USER) {
    return {
      ...state,
      cardsUser: [...state.cardsUser, ...[state.cardUser]],
    };
  }
  if (action.type === CARD_USER) {
    return {
      ...state,
      cardUser: action.formData,
    };
  }
  if (action.type === SEARCH_VALUE) {
    return {
      ...state,
      search: action.value,
    };
  }
  return state;
}
