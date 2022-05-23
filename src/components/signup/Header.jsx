import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

const Logo = styled.h1({
  '& a': {
    fontSize: '36px',
    color: '#5B40FF',
    ':hover': {
      color: '#492DF0',
    },
  },
  marginBottom: '15px',
});

const Title = styled.h2({
  fontSize: '30px',
});

const MoveToSignIn = styled.div({
  display: 'block',
  marginBottom: '20px',
  '& a': {
    backgroundColor: 'transparent',
    fontSize: '16px',
    color: '#2e13d3',
    ':hover': {
      backgroundColor: '#EDF3FF',
      transition: '300ms',
    },
  },
});

export default function Header() {
  return (
    <div style={{ width: '400px' }}>
      <Logo><Link to="/">QuizMap</Link></Logo>
      <Title>Welcome to QuizMap</Title>
      <MoveToSignIn>
        <Link to="/login">Already have an account?</Link>
      </MoveToSignIn>
    </div>
  );
}
