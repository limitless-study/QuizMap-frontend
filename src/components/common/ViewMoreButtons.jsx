import styled from '@emotion/styled';

import { IoIosMore } from 'react-icons/io';

const ThreeDotsButton = styled.button({
  zIndex: '10',
  display: 'inline-block',
  position: 'absolute',
  right: '10px',
  top: '10px',
  backgroundColor: 'transparent',
  width: '20px',
  height: '20px',
  lineHeight: '20px',
  borderRadius: '20px',
  alignItems: 'center',
  fontSize: '18px',
  border: 'none',
  color: 'darkgray',
  ':hover': {
    backgroundColor: 'white',
    cursor: 'pointer',
  },
  ':focus': {
    color: '1b1c1d',
  },
});

const DeleteButton = styled.span({
  position: 'absolute',
  padding: '5px 10px',
  right: '0',
  top: '80%',
  borderRadius: '2px',
  backgroundColor: 'white',
  border: 'none',
  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 10px',
  color: '1b1c1d',
  ':hover': {
    backgroundColor: '#EEEBFF',
  },
});

export default function ViewMoreButtons({
  target, isViewMoreHidden,
  handleClickOutside, handleClickViewMoreButton, handleClickDeleteButton,
}) {
  return (
    <ThreeDotsButton
      type="button"
      key={target.id}
      onClick={() => handleClickViewMoreButton(target)}
      onBlur={handleClickOutside}
    >
      <IoIosMore />
      <DeleteButton
        type="button"
        hidden={isViewMoreHidden}
        onMouseDown={() => handleClickDeleteButton(target)}
      >
        Delete
      </DeleteButton>
    </ThreeDotsButton>
  );
}
