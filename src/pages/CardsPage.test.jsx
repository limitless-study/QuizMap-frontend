import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import CardsPage from './CardsPage';

describe('CardsPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      cards: [
        { id: 1, question: '사과를 영어로 하면?', answer: 'apple' },
        { id: 2, question: '과일을 영어로 하면?', answer: 'fruit' },
      ],
      cardIndex: 1,
      flipped: true,
    }));
  });

  it('renders Cards Page', () => {
    render(
      <MemoryRouter>
        <CardsPage />
      </MemoryRouter>,
    );
  });
});
