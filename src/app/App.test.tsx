import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import About from '../pages/about/About';
import UserData from '../pages/userdata/UserData';
import { Provider } from 'react-redux';
import store from '../store';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Provider store={store}>
        <About />
      </Provider>
    );
    expect(container.getElementsByTagName('h3')[0]).toHaveTextContent(
      'Здесь будет страничка о нас'
    );
  });
  it('renders without crashing', () => {
    const { container } = render(
      <Provider store={store}>
        <UserData />
      </Provider>
    );
    expect(container.getElementsByTagName('h3')[0]).toHaveTextContent(
      'Пожалуйста, заполните форму'
    );
  });
  it('should render App component', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const header = container.querySelector('header');
    const search = container.querySelector('.main__search');
    const cards = container.querySelector('.cards');
    const form = container.querySelector('form');
    expect(header).toBeInTheDocument();
    expect(search).toBeInTheDocument();
    expect(cards).toBeInTheDocument();
    expect(form).toBeInTheDocument();
  });
});
