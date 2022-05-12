import { render, fireEvent } from '@testing-library/react';

import CardButtons from './CardButtons';

describe('CardButtons', () => {
  const handleClick = jest.fn();
  const handleFlip = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders CardButtons', () => {
    render(<CardButtons />);
  });

  it('listens click events', () => {
    const { getByRole } = render(
      <CardButtons
        onFlip={handleFlip}
        onClick={handleClick}
      />,
    );

    fireEvent.click(getByRole('button', { name: 'X' }));
    expect(handleClick).toBeCalledWith('X');

    fireEvent.click(getByRole('button', { name: 'O' }));
    expect(handleClick).toBeCalledWith('O');

    fireEvent.click(getByRole('button', { name: 'FLIP' }));
    expect(handleFlip).toBeCalled();
  });
});
