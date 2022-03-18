import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import CreateForm from './CreateForm';

describe('CreateForm', () => {
  const dispatch = jest.fn();

  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const createFields = {
    title: 'Title',
    question: 'Question',
    answer: 'Answer',
  };

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders CreateForm', () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <CreateForm
          fields={createFields}
          onChange={handleChange}
          onClick={handleClick}
        />
      </MemoryRouter>,
    );

    expect(getByLabelText('flashcard title')).not.toBeNull();
    expect(getByLabelText('flashcard question')).not.toBeNull();
    expect(getByLabelText('flashcard answer')).not.toBeNull();
  });

  it('listens input change events', () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <CreateForm
          fields={createFields}
          onChange={handleChange}
          onClick={handleClick}
        />
      </MemoryRouter>,
    );

    fireEvent.change(getByLabelText('flashcard title'), { target: { value: 'new title' } });
    expect(handleChange).toBeCalled();
  });

  it('listens button click events', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <CreateForm
          fields={createFields}
          onChange={handleChange}
          onClick={handleClick}
        />
      </MemoryRouter>,
    );

    fireEvent.click(getByRole('button', { target: { name: 'add-card' } }));
    expect(handleClick).toBeCalled();
  });
});
