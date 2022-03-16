import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import CreatePage from './CreatePage';

describe('CreatePage', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      createFields: {
        title: 'Title',
        question: 'Question',
        answer: 'Answer',
      },
    }));
  });

  it('renders CreatePage', () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <CreatePage />
      </MemoryRouter>,
    );

    expect(getByLabelText('flashcard title')).not.toBeNull();
  });
});
