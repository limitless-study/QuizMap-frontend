import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import img from '../img/done.svg';

const Container = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Description = styled.div({
  '& h2': {
    fontSize: '40px',
  },
  '& p': {
    fontSize: '24px',
  },
});

const Button = styled.button({
  marginTop: '20px',
  outline: 0,
  border: 0,
  width: '200px',
  height: '50px',
  borderRadius: '30px',
  backgroundColor: '#5B40FF',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  fontSize: '24px',
  '& a': {
    color: 'white',
  },
});

const Image = styled.img({
  width: '500px',
});

export default function HomePage() {
  return (
    <Container>
      <Description>
        <h2>Flashcards</h2>
        <p>Flashcard Learning Tools</p>
        <p>Create your own Flashcards!</p>
        <Button
          type="button"
        >
          <Link to="/cardsets">Start Now!</Link>
        </Button>
      </Description>
      <Image src={img} alt="" />
    </Container>
  );
}
