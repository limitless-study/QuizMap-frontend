import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import { FaPen, FaPlayCircle, FaTrashAlt } from 'react-icons/fa';

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const TopField = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const BottomField = styled.div({
  fontWeight: 'bolder',
  fontSize: '22px',
  color: '#D7D7D7',
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
  ':hover': {
    cursor: 'pointer',
  },
});

const MindMapButton = styled.button({
  padding: '0 7px',
  height: '28px',
  fontSize: '15px',
  backgroundColor: '#F9F9F9',
  borderRadius: '2px',
  border: 'none',
  transition: 'box-shadow 0.3s',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
  '& a': {
    display: 'block',
  },
  ':hover': {
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px',
  },
});

export default function CardsetInfo({ cardsetInfo, onDelete }) {
  const {
    id, topic: name, cardSetCount, cardCount,
  } = cardsetInfo;

  const handleClick = () => {
    onDelete();
  };

  return (
    <Wrapper>
      <TopField>
        <h1>{name}</h1>
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
        <IconBox
          type="button"
          onClick={handleClick}
        >
          <FaTrashAlt />
        </IconBox>
        <MindMapButton type="button">
          <Link to={`/mindmap/${id}`}>Convert to Mindmap</Link>
        </MindMapButton>
      </TopField>
      <BottomField>
        {`${cardSetCount} Cardsets, ${cardCount} Cards`}
      </BottomField>
    </Wrapper>

  );
}
