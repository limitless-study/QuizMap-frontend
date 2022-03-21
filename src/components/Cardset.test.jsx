import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Cardset from './Cardset';

describe('Cardset', () => {
  const cardsets = [
    { id: 1, title: 'Card Set #1' },
    { id: 2, title: 'Card Set #2' },
    { id: 3, title: 'Card Set #3' },
    { id: 4, title: 'Card Set #4' },
  ];

  it('renders Cardset', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Cardset cardsets={cardsets} />
      </MemoryRouter>,
    );

    cardsets.forEach((cardset) => {
      expect(getByText(cardset.title)).not.toBeNull();
    });
  });
});
