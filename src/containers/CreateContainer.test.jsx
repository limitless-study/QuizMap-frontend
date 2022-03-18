import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import CreateContainer from './CreateContainer';

import {
  changeCardsetTitle,
  updateCard,
} from '../actions';

describe('CreateContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      currentCardId: 1,
      cardset: {
        id: 1,
        title: 'test-title',
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

  it('renders CreateContainer', () => {
    render(
      <MemoryRouter>
        <CreateContainer />
      </MemoryRouter>,
    );
  });

  it('listens input field change events', () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <CreateContainer />
      </MemoryRouter>,
    );

    fireEvent.change(getByLabelText('flashcard title'), {
      target: { value: 'New Title' },
    });

    expect(dispatch).toBeCalledWith(changeCardsetTitle({
      name: 'title', value: 'New Title',
    }));

    fireEvent.change(getByLabelText('flashcard question'), {
      target: { value: 'New Question' },
    });

    expect(dispatch).toBeCalledWith(updateCard({
      currentCardId: 1, name: 'question', value: 'New Question',
    }));
  });

  it('listens add new card click events', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <CreateContainer />
      </MemoryRouter>,
    );

    fireEvent.click(getByRole('button', { name: 'add new card' }));

    expect(dispatch).toBeCalledTimes(1);
  });

  it('listens sidebar card button click event', () => {
    const { getAllByRole } = render(
      <MemoryRouter>
        <CreateContainer />
      </MemoryRouter>,
    );

    fireEvent.click(getAllByRole('button')[0]);

    expect(dispatch).toBeCalledTimes(1);
  });
});
