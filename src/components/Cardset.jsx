import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const CardsetBox = styled.div({
  width: '400px',
  fontWeight: 'bold',
  marginBottom: '10px',
  marginLeft: '10px',
  backgroundColor: '#EDEDED',
  padding: '6px',
});

const CardBox = styled.div({
  fontWeight: 'bold',
  marginBottom: '10px',
  marginLeft: '10px',
  padding: '6px',
  width: '400px',
  backgroundColor: '#FAFAFA',
});

const CardsetInfo = styled.div({
  color: '#c2c2c2',
  fontWeight: 'bolder',
  fontSize: '22px',
});

const StudioButton = styled.button({
  marginLeft: '3px',
  backgroundColor: 'lightgray',
  borderRadius: '3px',
  padding: '2px',
  fontWeight: 'bold',
  border: 'none',
  color: 'white',
  '& a': {
    display: 'block',
    fontWeight: 'bold',
    border: 'none',
    color: 'white',
  },
});

export default function Cardset({ cardsetInfo, cardsetChildren }) {
  const {
    id, name, cardSetCount, cardCount,
  } = cardsetInfo;

  return (
    <div>
      <div>
        <h1>{name}</h1>
        <CardsetInfo>
          {`${cardSetCount} Cardsets, ${cardCount} Cards`}
          <StudioButton
            type="button"
          >
            <Link to={`/studio/${id}`}>
              수정
            </Link>
          </StudioButton>
        </CardsetInfo>
      </div>
      <h2>Cards</h2>
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
              <StudioButton
                type="button"
              >
                학습
              </StudioButton>
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
