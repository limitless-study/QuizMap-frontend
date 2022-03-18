import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const CardsetsContainer = styled.ul({
  margin: '20px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

const Cardset = styled.li({
  width: '240px',
  height: '180px',
  padding: '20px',
  margin: '10px',
  fontSize: '24px',
  fontWeight: 'bold',
  border: '1px solid #c1c1c1',
  borderRadius: '10px',
  backgroundColor: 'white',
  boxShadow: 'rgba(0, 0, 0, 0.09) 0px 3px 12px;',
  '& a': {
    display: 'block',
    width: '100%',
    height: '100%',
  },
});

export default function Cardsets({ cardsets }) {
  // TODO: 임시 URL을 실제 /cardsets/${cardset.id}로 수정
  return (
    <CardsetsContainer>
      {cardsets.map((cardset) => (
        <Cardset key={cardset.id}>
          <Link to={`/cardsets/${cardset.id}`}>
            {cardset.title}
          </Link>
        </Cardset>
      ))}
    </CardsetsContainer>
  );
}
