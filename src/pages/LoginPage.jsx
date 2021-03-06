import styled from '@emotion/styled';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import img from '../img/Saly-38.svg';

import LoginContainer from '../containers/LoginContainer';

import {
  initializeLoginFields,
} from '../actions';

const Image = styled.img({
  display: 'absolute',
  width: '40vw',
  height: '100vh',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
});

export default function LoginPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeLoginFields());
  });

  return (
    <div style={{ display: 'flex', maxWidth: '100vw', minHeight: '100vh' }}>
      <div style={{
        display: 'flex',
        flexGrow: '1',
        width: '60vh',
        backgroundColor: 'white',
        transition: '300ms',
      }}
      >
        <LoginContainer />
      </div>
      <div style={{
        position: 'fixed',
        top: '0',
        right: '0',
        overflowX: 'hidden',
        background: 'linear-gradient(#96CBFF, #8470FF)',
      }}
      >
        <Image src={img} alt="" />
      </div>
    </div>
  );
}
