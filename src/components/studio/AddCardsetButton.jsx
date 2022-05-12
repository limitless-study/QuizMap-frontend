import { BsPlusCircleDotted } from 'react-icons/bs';

import styled from '@emotion/styled';

const Button = styled.button({
  backgroundColor: 'white',
  width: '260px',
  height: '180px',
  textAlign: 'center',
  lineHeight: '180px',
  borderRadius: '10px',
  border: '1px solid #E7E7E7',
  boxShadow: 'rgba(0, 0, 0, 0.09) 0px 3px 12px',
  cursor: 'pointer',
  transition: 'background-color 0.5s',
  ':hover': {
    backgroundColor: 'gray',
    color: 'white',
  },
});

export default function AddCardsetButton({ handleClick }) {
  return (
    <Button
      type="button"
      onClick={handleClick}
    >
      <BsPlusCircleDotted size={30} />
    </Button>
  );
}
