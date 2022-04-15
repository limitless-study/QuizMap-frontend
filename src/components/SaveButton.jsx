import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const Button = styled.div({
  position: 'absolute',
  right: '0',
  margin: '2em',
  width: '130px',
  height: '40px',
  backgroundColor: '#5B40FF',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '10px',
  ':hover': {
    cursor: 'pointer',
    backgroundColor: '#2E13D3',
  },
  '& a': {
    color: 'white',
    display: 'block',
    width: '130px',
    height: '40px',
    lineHeight: '35px',
    textAlign: 'center',
  },
});

export default function SaveButton({ cardsetId, onSave }) {
  return (
    <Button>
      <Link
        to={`/cardsets/${cardsetId}`}
        onClick={onSave}
      >
        save
      </Link>
    </Button>
  );
}
