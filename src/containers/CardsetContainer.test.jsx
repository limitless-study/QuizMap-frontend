import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import CardsetContainer from './CardsetContainer';

import cardsets from '../fixtures/cardsets';

describe('CardsetContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      cardsets,
    }));
  });

  it('renders CardsetContainer', () => {
    render(
      <MemoryRouter>
        <CardsetContainer />
      </MemoryRouter>,
    );
  });
});
