import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Navbar from './Navbar';

describe('Navbar contains all links', () => {
  it('renders without crashing', () => {
    beforeEach(() => {
      render(<Navbar />);
    });

    it('renders without crashing', () => {
      expect(screen.getByText('Главная')).toBeInTheDocument();
    });

    it('renders without crashing', () => {
      expect(screen.getByText('О нас')).toBeInTheDocument();
    });

    it('renders without crashing', () => {
      expect(screen.getByText('Форма')).toBeInTheDocument();
    });
  });
});
