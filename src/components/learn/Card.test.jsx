import { render } from '@testing-library/react';

import Card from './Card';

describe('Card', () => {
  it('renders Card to show flashcard content', () => {
    const content = '사과를 영어로 하면?';

    const { getByText } = render(
      <Card
        content={content}
      />,
    );

    expect(getByText(content));
  });
});
