import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import CardsetPage from './CardsetPage';

describe('CardsetPage', () => {
  it('renders Cards Page', () => {
    render(
      <MemoryRouter>
        <CardsetPage />
      </MemoryRouter>,
    );
  });
});
