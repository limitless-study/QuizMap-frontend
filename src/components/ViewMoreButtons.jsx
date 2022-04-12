import styled from '@emotion/styled';

import { IoIosMore } from 'react-icons/io';

const ThreeDotsButton = styled.button({
  display: 'inline-block',
  position: 'absolute',
  right: '0',
  margin: '5%',
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

const DeleteButton = styled.span({
  position: 'absolute',
  marginTop: '3px',
  padding: '5px 10px',
  right: '0',
  top: '100%',
  borderRadius: '2px',
  backgroundColor: 'white',
  border: 'none',
  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 10px',
  color: 'black',
  ':hover': {
    backgroundColor: '#EEEBFF',
  },
});

export default function ViewMoreButtons({
  cardset, isViewMoreHidden,
  handleClickOutside, handleClickViewMoreButton, handleClickDeleteButton,
}) {
  const { id, type } = cardset;

  return (
    <ThreeDotsButton
      type="button"
      key={id}
      onClick={() => handleClickViewMoreButton(type, id)}
      onBlur={handleClickOutside}
    >
      <IoIosMore />
      <DeleteButton
        type="button"
        hidden={isViewMoreHidden}
        onMouseDown={() => handleClickDeleteButton(type, id)}
      >
        Delete
      </DeleteButton>
    </ThreeDotsButton>
  );
}
