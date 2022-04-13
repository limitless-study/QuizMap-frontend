import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { FaFolder, FaPen, FaPlayCircle } from 'react-icons/fa';

const CardsetBoxField = styled.li({
  fontWeight: 'bold',
  backgroundColor: 'transparent',
  padding: '15px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #F1F1F1',
  transition: 'background-color 0.3s',
  ':hover': {
    backgroundColor: '#f3f3f3',
  },
});

const CardsetBoxTitle = styled.div({
  display: 'flex',
  '& a:hover': {
    textDecoration: 'underline',
  },
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
    <CardsetBoxField>
      <CardsetBoxTitle>
        <IconBox type="button">
          <FaFolder />
        </IconBox>
        <Link to={`/cardsets/${id}`}>
          {topic}
        </Link>
      </CardsetBoxTitle>
      <div>
        <IconBox type="button">
          <Link to={`/studio/${id}`}>
            <FaPen />
          </Link>
        </IconBox>
        <IconBox type="button">
          <Link to={`/learn/${id}`}>
            <FaPlayCircle />
          </Link>
        </IconBox>
      </div>
    </CardsetBoxField>
  );
}
