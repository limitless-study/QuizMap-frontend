import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import CreatePage from './CreatePage';

describe('CreatePage', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      currentCardId: 1,
      cardset: {
        id: 1,
        topic: 'test-topic',
        cards: [
          {
            id: 1,
            question: '',
            answer: '',
          },
        ],
      },
    }));
  });

  it('renders CreatePage', () => {
    render(
      <MemoryRouter>
        <CreatePage />
      </MemoryRouter>,
    );
  });
});
