// import UserCards from 'components/userCards/UserCards';
import { UPDATE_DATA } from '../redux/actions';
import { INewCard } from '../types/types';

const newCardArray: Array<INewCard> = [];
const initialState = { cardsUser: newCardArray };

export default function counterReducer(
  state = initialState,
  action: {
    date: INewCard;
    type: string;
  }
) {
  if (action.type === UPDATE_DATA) {
    return {
      ...state,
      userCards: [...state.cardsUser, ...[action.date]],
      //   userCards: [...[UserCards], ...[action.date]],
    };
  }
}
