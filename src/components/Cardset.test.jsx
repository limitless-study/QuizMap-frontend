import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Cardset from './Cardset';

describe('Cardset', () => {
  const cardsets = [
    { id: 1, topic: 'Card Set #1' },
    { id: 2, topic: 'Card Set #2' },
    { id: 3, topic: 'Card Set #3' },
    { id: 4, topic: 'Card Set #4' },
  ];

  it('renders Cardset', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Cardset cardsets={cardsets} />
      </MemoryRouter>,
    );

    cardsets.forEach((cardset) => {
      expect(getByText(cardset.topic)).not.toBeNull();
    });
  });
});
