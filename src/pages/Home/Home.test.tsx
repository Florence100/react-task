import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

describe('test Home page', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(container.firstChild).toBeDefined();
  });
});
