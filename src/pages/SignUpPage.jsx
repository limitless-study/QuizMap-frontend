import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import img from '../img/Saly-10.svg';

import SignUpContainer from '../containers/SignUpContainer';

import {
  initializeSignUpFields,
} from '../actions';

const Image = styled.img({
  display: 'absolute',
  width: '40vw',
  height: '100vh',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
});

export default function SignUpPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeSignUpFields());
  });

  return (
    <div style={{ display: 'flex', maxWidth: '100vw', minHeight: '100vh' }}>
      <div style={{
        display: 'flex',
        flexGrow: '1',
        width: '60vw',
        backgroundColor: 'white',
        transition: '300ms',
      }}
      >
        <SignUpContainer />
      </div>
      <div style={{
        position: 'fixed',
        width: '40vw',
        top: '0',
        right: '0',
        overflowX: 'hidden',
        background: 'linear-gradient(#5352ED, #70C3FF)',
      }}
      >
        <Image src={img} alt="" />
      </div>
    </div>
  );
}
