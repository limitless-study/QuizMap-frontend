import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import CreateForm from './CreateForm';

describe('CreateForm', () => {
  const dispatch = jest.fn();

  const handleInputChange = jest.fn();
  const handleTitleChange = jest.fn();
  const handleCardClick = jest.fn();
  const handleAddCardButtonClick = jest.fn();

  const currentCard = {
    id: 1,
    question: 'test-question',
    answer: 'test-answer',
  };

  const cards = [
    { id: 1, question: 'test-question', answer: 'test-answer' },
  ];

  function renderCreateForm() {
    return render(
      <MemoryRouter>
        <CreateForm
          currentCardId={1}
          currentCard={currentCard}
          title="test-title"
          cards={cards}
          onInputChange={handleInputChange}
          onTitleChange={handleTitleChange}
          onCardClick={handleCardClick}
          onAddCardClick={handleAddCardButtonClick}
        />
      </MemoryRouter>,
    );
  }

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders CreateForm', () => {
    const { getByLabelText } = renderCreateForm();

    expect(getByLabelText('flashcard title')).not.toBeNull();
    expect(getByLabelText('flashcard question')).not.toBeNull();
    expect(getByLabelText('flashcard answer')).not.toBeNull();
  });

  it('listens input change events', () => {
    const { getByLabelText } = renderCreateForm();

    fireEvent.change(getByLabelText('flashcard title'), { target: { value: 'new title' } });
    expect(handleTitleChange).toBeCalled();

    fireEvent.change(getByLabelText('flashcard question'), { target: { value: 'new question' } });
    expect(handleInputChange).toBeCalled();
  });

  it('listens button click events', () => {
    const { getByText } = renderCreateForm();

    fireEvent.click(getByText(/add new card/));
    expect(handleAddCardButtonClick).toBeCalled();
  });
});
