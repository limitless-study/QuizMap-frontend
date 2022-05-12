import { FcIdea } from 'react-icons/fc';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const Container = styled.div({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  verticalAlign: 'middle',
  justifyContent: 'center',
});

const Text = styled.p({
  fontSize: '20px',
  fontWeight: 'bolder',
  padding: '15px',
});

const BackButton = styled.button({
  backgroundColor: '#5B40FF',
  border: 'none',
  width: '250px',
  height: '50px',
  borderRadius: '40px',
  transition: 'box-shadow 0.3s',
  '& a': {
    color: 'white',
    display: 'block',
    fontSize: '18px',
    fontWeight: 'bolder',
  },
  ':hover': {
    boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;',
    cursor: 'pointer',
  },
});

export default function NoMoreCards({ id }) {
  return (
    <Container>
      <FcIdea size="50" />
      <Text>카드가 더 이상 없습니다!</Text>
      <BackButton type="button">
        <Link to={`/cardsets/${id}`}>돌아가기</Link>
      </BackButton>
    </Container>
  );
}
