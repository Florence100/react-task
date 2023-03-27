import React from 'react';
import { Form } from '../../components/form/Form';
import './style.css';
import { IForm } from '../../interfaces/interfaces';

class UserData extends React.Component {
  state: IForm;

  constructor(props: object) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  updateData = (value: object[]) => {
    this.setState({ cards: value });
    console.log('cards!', this.state);
  };
  render() {
    return (
      <div className="wrapper">
        <div className="form-container">
          <h3>Пожалуйста, заполните форму</h3>
          <Form updateData={this.updateData} />
        </div>
      </div>
    );
  }
}

export default UserData;
