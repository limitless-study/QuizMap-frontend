import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

const Cardset = styled.div({
  display: 'table',
  backgroundColor: '#F3F3F3',
  width: '220px',
  height: '160px',
  padding: '20px',
  textAlign: 'left',
  borderRadius: '10px',
  border: '1px solid #E7E7E7',
  boxShadow: 'rgba(0, 0, 0, 0.09) 0px 3px 12px',
  transition: 'border 0.5s',
  '& a': {
    height: '160px',
    display: 'block',
    color: '#303030',
    fontSize: '20px',
    fontWeight: 'bolder',
    verticalAlign: 'middle',
  },
  ':hover': {
    border: '2px solid #2F38FF',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 10px',
  },
});

export default function RootCard({
  cardset, isViewMoreHidden = true,
  handleClickOutside, handleClickViewMoreButton, handleClickDeleteCardsetButton,
}) {
  return (
    <Cardset>
      <button
        type="button"
        key={cardset.id}
        onClick={() => handleClickViewMoreButton(cardset.id)}
        onBlur={handleClickOutside}
      >
        ...
      </button>
      <button
        type="button"
        hidden={isViewMoreHidden}
        onMouseDown={() => handleClickDeleteCardsetButton(cardset.id)}
      >
        Delete
      </button>
      <Link to={`/cardsets/${cardset.id}`}>
        {cardset.topic}
      </Link>
    </Cardset>
  );
}
