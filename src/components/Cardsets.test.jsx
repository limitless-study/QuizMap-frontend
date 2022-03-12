import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Cardsets from './Cardsets';

describe('Cardsets', () => {
  const cardsets = [
    { id: 1, title: 'Card Set #1' },
    { id: 2, title: 'Card Set #2' },
    { id: 3, title: 'Card Set #3' },
    { id: 4, title: 'Card Set #4' },
  ];

  it('renders Cardsets', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Cardsets cardsets={cardsets} />
      </MemoryRouter>,
    );

    cardsets.forEach((cardset) => {
      expect(getByText(cardset.title)).not.toBeNull();
    });
  });
});
