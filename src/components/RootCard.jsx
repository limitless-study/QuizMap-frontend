import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import ViewMoreButtons from './ViewMoreButtons';

const Cardset = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#F3F3F3',
  width: '220px',
  height: '160px',
  padding: '20px',
  borderRadius: '10px',
  border: '1px solid #E7E7E7',
  boxShadow: 'rgba(0, 0, 0, 0.09) 0px 3px 12px',
  transition: 'border 0.5s',
  '& a': {
    color: '#303030',
    fontSize: '20px',
    fontWeight: 'bolder',
  },
  ':hover': {
    border: '2px solid #2F38FF',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 10px',
  },
});

export default function RootCard({
  cardset, isViewMoreHidden,
  handleClickOutside, handleClickViewMoreButton, handleClickDeleteCardsetButton,
}) {
  return (
    <Cardset>
      <Link to={`/cardsets/${cardset.id}`}>
        {cardset.topic}
      </Link>
      <ViewMoreButtons
        id={cardset.id}
        isViewMoreHidden={isViewMoreHidden}
        handleClickOutside={handleClickOutside}
        handleClickViewMoreButton={handleClickViewMoreButton}
        handleClickDeleteCardsetButton={handleClickDeleteCardsetButton}
      />
    </Cardset>
  );
}
