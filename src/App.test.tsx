import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import About from './pages/about/About';
import UserData from './pages/userdata/UserData';

describe('App', () => {
  it('renders without crashing', () => {
    const { container } = render(<About />);
    expect(container.getElementsByTagName('h3')[0]).toHaveTextContent(
      'Здесь будет страничка о нас'
    );
  });
  it('renders without crashing', () => {
    const { container } = render(<UserData />);
    expect(container.getElementsByTagName('h3')[0]).toHaveTextContent(
      'Пожалуйста, заполните форму'
    );
  });
});
