import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import CardsetsPage from './CardsetsPage';

import cardsets from '../fixtures/cardsets';

describe('CardsetsPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      cardsets,
    }));
  });

  it('renders Cardsets Page', () => {
    render(
      <MemoryRouter>
        <CardsetsPage />
      </MemoryRouter>,
    );
  });
});
