import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import goodsList from './goodList';

describe('App', () => {
  it('renders without crashing', () => {
    const { container } = render(<About />);
    expect(container.getElementsByTagName('h3')[0]).toHaveTextContent(
      'Здесь будет страничка о нас'
    );
  });
  it('renders without crashing', () => {
    const { container } = render(<Home />);
    expect(container.querySelectorAll('.card')).toHaveLength(goodsList.length);
  });
});
