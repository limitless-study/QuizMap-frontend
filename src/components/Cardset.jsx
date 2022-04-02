import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { FaPen, FaPlayCircle } from 'react-icons/fa';

import CardsetChildren from './CardsetChildren';

const Wrapper = styled.div({
  width: '100%',
  height: '93%',
  padding: '20px',
});

const Title = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const Header = styled.div({
  alignItems: 'center',
  marginBottom: '10px',
});

const SubTitle = styled.h2({
  width: '91%',
  marginBottom: '10px',
  color: '#686868',
  borderBottom: '1px solid #C6C6C6',
});

const CardsetInfo = styled.div({
  color: '#c2c2c2',
  fontWeight: 'bolder',
  fontSize: '22px',
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

export default function Cardset({ cardsetInfo, cardsetChildren }) {
  const {
    id, name, cardSetCount, cardCount,
  } = cardsetInfo;

  return (
    <Wrapper>
      <Header>
        <Title>
          <h1>{name}</h1>
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
          <MindMapButton
            type="button"
          >
            <Link to={`/mindmap/${id}`}>Convert to Mindmap</Link>
          </MindMapButton>

        </Title>
        <CardsetInfo>
          {`${cardSetCount} Cardsets, ${cardCount} Cards`}
        </CardsetInfo>
      </Header>
      <SubTitle>
        Cards
      </SubTitle>
      <CardsetChildren
        cardsetChildren={cardsetChildren}
      />
    </Wrapper>
  );
}
