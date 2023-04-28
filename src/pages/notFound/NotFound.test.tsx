import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe('test 404 page', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    expect(container.firstChild).toBeDefined();
    expect(screen.getByText('Здесь будет страница 404')).toBeInTheDocument();
  });
});
