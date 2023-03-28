import React from 'react';
import { Form } from '../../components/form/Form';
import './style.css';
import { IFormState, INewCard } from '../../types/types';
import PopUp from '../../components/userCard/UserCard';

class UserData extends React.Component {
  state: IFormState;

  constructor(props: object) {
    super(props);
    this.state = {
      cards: [],
      openPopUp: false,
    };
  }

  updateData = (newCard: INewCard) => {
    this.setState({
      cards: [...this.state.cards, newCard],
      openPopUp: true,
    });
    setTimeout(() => {
      const currentCard = this.state.cards[0].userName;
      console.log(currentCard);
    }, 1000);
  };

  // createCard() {

  // }

  render() {
    return (
      <div className="wrapper">
        <div className="form-container">
          <h3>Пожалуйста, заполните форму</h3>
          <Form updateData={this.updateData} />
          {this.state.openPopUp ? <PopUp /> : null}
        </div>
      </div>
    );
  }
}

export default UserData;
