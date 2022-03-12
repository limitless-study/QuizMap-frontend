import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders HomePage', () => {
    const { getByText, getByRole } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(getByRole('heading', { name: 'Flashcards' }));
    expect(getByText('Flashcard Learning Tools')).not.toBeNull();
    expect(getByRole('button', { name: 'Start Now!' }));
  });
});
