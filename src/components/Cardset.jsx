import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

export default function Cardset({ cardsetInfo, cardsetChildren }) {
  const {
    id, name, cardsetCount, cardCount,
  } = cardsetInfo;

  // TODO: 임시 URL을 실제 /cardsets/${cardset.id}로 수정
  return (
    <div>
      <div>
        <h1>{name}</h1>
        <p>
          {`${cardsetCount} Cardsets, ${cardCount} Cards`}
        </p>
      </div>
      {cardsetChildren.map((child) => (
        <div
          key={child.id}
        >
          {child.title}
        </div>
      ))}
    </div>
  );
}
