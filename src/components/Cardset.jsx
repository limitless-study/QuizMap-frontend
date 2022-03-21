import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const CardsetBox = styled.div({
  backgroundColor: 'lightblue',
});

const CardBox = styled.div({
  backgroundColor: 'lightgreen',
});

const StudioButton = styled.button({
  '& a': {
    display: 'block',
  },
});

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
      {cardsetChildren.map((child) => {
        if (child.type === 'CARDSET') {
          return (
            <CardsetBox
              key={child.id}
            >
              <Link to={`/cardsets/${child.id}`}>
                {child.title}
              </Link>
              <StudioButton
                type="button"
              >
                <Link to={`/studio/${child.id}`}>
                  수정
                </Link>
              </StudioButton>
              <button
                type="button"
              >
                학습

              </button>
            </CardsetBox>
          );
        }
        return (
          <CardBox key={child.id}>
            {child.title}
          </CardBox>
        );
      })}
    </div>
  );
}
