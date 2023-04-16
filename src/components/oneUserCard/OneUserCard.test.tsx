import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import OneUserCard from './OneUserCard';

const testUser = {
  userName: 'Nastya',
  userDate: '2000-10-10',
  userCountry: 'Belarus',
  userCheckbox: true,
  userSex: 'female',
  userImg: 'test.jpg',
};

describe('CardInfo', async () => {
  it('renders Card for user', async () => {
    beforeEach(() => {
      render(<OneUserCard key={33} form={testUser} />);
    });
  });

  it('renders card with name', () => {
    expect(screen.getByText(testUser.userName)).toBeInTheDocument();
  });

  it('renders card with date', () => {
    expect(screen.getByText(testUser.userDate)).toBeInTheDocument();
  });

  it('renders card with country', () => {
    expect(screen.getByText(testUser.userCountry)).toBeInTheDocument();
  });

  it('renders card with sex', () => {
    expect(screen.getByText(testUser.userSex)).toBeInTheDocument();
  });
});
