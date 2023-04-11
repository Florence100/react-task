import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import About from './About';

describe('test About page', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );

    expect(container.firstChild).toBeDefined();
    expect(screen.getByText('Здесь будет страничка о нас')).toBeInTheDocument();
  });
});
