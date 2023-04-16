import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import { Provider } from 'react-redux';
import store from '../../store';

describe('test Home page', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );

    expect(container.firstChild).toBeDefined();
  });
});
