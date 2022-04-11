import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import { IoIosMore } from 'react-icons/io';

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

const ViewMoreButton = styled.button({
  display: 'inline-block',
  position: 'relative',
  marginTop: '5px',
  width: '30px',
  height: '22px',
  lineHeight: '28px',
  borderRadius: '2px',
  backgroundColor: '#FAFAFA',
  fontSize: '18px',
  border: 'none',
  ':hover': {
    cursor: 'pointer',
  },
  ':focus': {
    backgroundColor: '#5B40FF',
    color: 'white',
  },
});

const DeleteButton = styled.button({
  position: 'absolute',
  marginTop: '3px',
  width: '60px',
  height: '30px',
  right: '0',
  top: '100%',
  borderRadius: '2px',
  backgroundColor: 'white',
  border: 'none',
  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 10px',
  ':hover': {
    backgroundColor: '#EEEBFF',
  },
});

export default function RootCard({
  cardset, isViewMoreHidden = true,
  handleClickOutside, handleClickViewMoreButton, handleClickDeleteCardsetButton,
}) {
  return (
    <Cardset>
      <Link to={`/cardsets/${cardset.id}`}>
        {cardset.topic}
      </Link>
      <div>
        <ViewMoreButton
          type="button"
          key={cardset.id}
          onClick={() => handleClickViewMoreButton(cardset.id)}
          onBlur={handleClickOutside}
        >
          <IoIosMore />
          <DeleteButton
            type="button"
            hidden={isViewMoreHidden}
            onMouseDown={() => handleClickDeleteCardsetButton(cardset.id)}
          >
            Delete
          </DeleteButton>
        </ViewMoreButton>
      </div>
    </Cardset>
  );
}
