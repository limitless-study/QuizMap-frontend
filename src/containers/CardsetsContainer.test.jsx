import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import CardsetsContainer from './CardsetsContainer';

import cardsets from '../fixtures/cardsets';

describe('CardsetsContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      cardsets,
    }));
  });

  it('renders CardsetsContainer', () => {
    render(
      <MemoryRouter>
        <CardsetsContainer />
      </MemoryRouter>,
    );
  });
});
