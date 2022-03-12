import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

describe('Header', () => {
  it('renders application title', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(getByText('Flashcards')).not.toBeNull();
  });

  it('renders header menus', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const menus = ['home', 'about', 'cardsets', 'log in', 'sign up'];

    menus.forEach((menu) => {
      expect(getByText(menu)).not.toBeNull();
    });
  });
});
