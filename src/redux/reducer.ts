import { CARDS_USER, cardsUser, CARD_USER, cardUser } from '../redux/actions';
import { INewCard } from '../types/types';

const newCardArray: Array<INewCard> = [];
const newCardUser: INewCard = {};
const initialState = { cardsUser: newCardArray, cardUser: newCardUser };

type ActionsTypes = ReturnType<typeof cardsUser> | ReturnType<typeof cardUser>;

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
  return state;
}
