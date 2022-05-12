import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import SideMenuBar from './SideMenuBar';

describe('SideMenuBar', () => {
  it('renders SideMenuBar', () => {
    const { getByText } = render(
      <MemoryRouter>
        <SideMenuBar />
      </MemoryRouter>,
    );

    expect(getByText('Limitless')).toBeInTheDocument();
  });
});
