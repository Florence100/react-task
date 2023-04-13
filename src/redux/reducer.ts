// import UserCards from 'components/userCards/UserCards';
import { UPDATE_DATA } from '../redux/actions';
import { INewCard } from '../types/types';

const newCardArray: Array<INewCard> = [];
const initialState = { cardsUser: newCardArray };

export default function rootReducer(
  state = initialState,
  action: { type: string; date: INewCard }
) {
  if (action.type === UPDATE_DATA) {
    return {
      ...state,
      cardsUser: [...state.cardsUser, ...[action.date]],
      //   userCards: [...[UserCards], ...[action.date]],
    };
  }
  return state;
}
