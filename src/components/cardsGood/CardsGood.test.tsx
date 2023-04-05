import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import CardsGood from './CardsGood';
import goodList from '../../data/goodList';

describe('Correct number of cards', () => {
  it('Renders the correct number of cards', () => {
    const { container } = render(<CardsGood />);
    const cards = container.querySelectorAll('.card');
    expect(cards.length).toBe(goodList.length);
  });
});
