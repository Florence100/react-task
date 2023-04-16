import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import OneFotoCard from './OneFotoCard';
import { Provider } from 'react-redux';
import store from '../../store';

const testPhoto = {
  id: '52820948801',
  owner: '92631779@N03',
  secret: '0466f357a9',
  server: '65535',
  title: 'Kestrel',
  ispublic: '1',
  isfriend: '0',
  isfamily: '1',
};

describe('Information about one card', async () => {
  it('renders one card', async () => {
    beforeEach(() => {
      render(
        <Provider store={store}>
          <OneFotoCard
            id={testPhoto.id}
            owner={testPhoto.owner}
            secret={testPhoto.secret}
            server={testPhoto.server}
            title={testPhoto.title}
            ispublic={testPhoto.ispublic}
            isfriend={testPhoto.isfriend}
            isfamily={testPhoto.isfamily}
          />
        </Provider>
      );
    });
  });

  it('renders card with title', () => {
    expect(screen.getByText(testPhoto.title)).toBeInTheDocument();
  });

  it('renders card with img', () => {
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
