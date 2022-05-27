import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import Header from '../components/home/Header';

import img from '../img/Saly-1.svg';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '90vh',
});

const Description = styled.div({
  '& h2': {
    color: 'white',
    fontSize: '40px',
  },
  '& p': {
    color: 'white',
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
  backgroundColor: 'white',
  fontSize: '24px',
  fontWeight: 'bold',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 3px 8px',
  transition: 'box-shadow 0.4s',
  '& a': {
    display: 'block',
    color: '#624de6',
  },
  ':hover': {
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 8px',
  },
});

const Image = styled.img({
  width: '500px',
});

export default function HomePage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100vh',
      background: 'linear-gradient(to top right, #bdb2ff, #4d63e6)',
      overflow: 'auto',
    }}
    >
      <header>
        <Header />
      </header>
      <Container>
        <Description>
          <h2>Learn Efficiently</h2>
          <p>Metacognition-based Learning Tool</p>
          <p>Study Smarter Not Harder!</p>
          <Button
            type="button"
          >
            <Link to="/login">Start Now</Link>
          </Button>
        </Description>
        <Image src={img} alt="" />
      </Container>
    </div>
  );
}
