import React from 'react';
// import Input from './UI/inputs/Input';
import Button from './UI/buttons/Button';
import '../styles/searchbar.css';
import '../styles/inputs.css';

type MyProps = object;
type MyState = { value: string };

class Searchbar extends React.Component<MyProps, MyState> {
  constructor(props: object) {
    super(props);
    if (!localStorage.getItem('currentValue')) {
      this.state = { value: '' };
    } else {
      this.state = { value: localStorage.getItem('currentValue') as string };
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillUnmount() {
    localStorage.setItem('currentValue', this.state.value);
  }

  handleChange(event: { target: { value: string } }) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="main__search">
        <form>
          <input
            type="text"
            value={this.state.value}
            className="input"
            placeholder="Искать по сайту"
            onChange={this.handleChange}
          />
          {/* <Input /> */}
          <Button />
        </form>
      </div>
    );
  }
}

export default Searchbar;
