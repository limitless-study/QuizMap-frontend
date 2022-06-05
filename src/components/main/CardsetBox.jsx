import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { FaFolder, FaPen, FaPlayCircle } from 'react-icons/fa';

const CardsetBoxField = styled.li({
  border: '1.5px solid #F1F1F1',
  position: 'relative',
  display: 'inline-block',
  width: '230px',
  height: '170px',
  fontWeight: 'bold',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#f3f3f3',
  borderRadius: '5px',
  transition: 'all .3s',
  ':hover': {
    border: '1px solid #c2c2c2',
  },
});

const CardsetBoxTitle = styled.div({
  display: 'flex',
  width: '230px',
  height: '170px',
  '& a': {
    padding: '15px',
    width: '100%',
    display: 'block',
  },
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
    padding: '0',
    lineHeight: '30px',
  },
});

export default function CardsetBox({ cardset }) {
  const { id, topic } = cardset;

  return (
    <CardsetBoxField>
      <CardsetBoxTitle>
        <Link to={`/cardsets/${id}`}>
          {topic}
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
        </Link>
      </CardsetBoxTitle>
    </CardsetBoxField>
  );
}
