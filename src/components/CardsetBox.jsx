import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { FaFolder, FaPen, FaPlayCircle } from 'react-icons/fa';

const CardsetBoxField = styled.li({
  width: '97%',
  fontWeight: 'bold',
  marginBottom: '10px',
  backgroundColor: '#F3F3F3',
  padding: '5px 0px 5px 5px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '& a:hover': {
    textDecoration: 'underline',
  },
});

const CardsetBoxTitle = styled.div({
  display: 'flex',
});

const IconBox = styled.button({
  width: '28px',
  height: '28px',
  fontSize: '15px',
  backgroundColor: '#D4D4D4',
  borderRadius: '2px',
  border: 'none',
  color: 'white',
  marginRight: '5px',
  '& a': {
    display: 'block',
    fontWeight: 'bold',
    border: 'none',
    color: 'white',
    textAlign: 'center',
  },
});

export default function CardsetBox({ cardset }) {
  const { id, topic } = cardset;

  return (
    <CardsetBoxField
      key={id}
    >
      <CardsetBoxTitle>
        <IconBox>
          <FaFolder />
        </IconBox>
        <Link to={`/cardsets/${id}`}>
          {topic}
        </Link>
      </CardsetBoxTitle>
      <div>
        <IconBox
          type="button"
        >
          <Link to={`/studio/${id}`}>
            <FaPen />
          </Link>
        </IconBox>
        <IconBox
          type="button"
        >
          <Link to={`/learn/${id}`}>
            <FaPlayCircle />
          </Link>
        </IconBox>
      </div>
    </CardsetBoxField>
  );
}
