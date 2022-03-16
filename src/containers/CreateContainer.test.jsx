import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import CreateContainer from './CreateContainer';

import {
  changeCreateFields,
} from '../actions';

describe('CreateContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      createFields: {
        title: 'Title',
        question: 'Question',
        answer: 'Answer',
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

  it('listens change events', () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <CreateContainer />
      </MemoryRouter>,
    );

    fireEvent.change(getByLabelText('flashcard title'), {
      target: { value: 'New Title' },
    });

    expect(dispatch).toBeCalledWith(changeCreateFields({
      name: 'title', value: 'New Title',
    }));
  });
});
