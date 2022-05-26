import { useEffect } from 'react';

<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
=======
import { useDispatch } from 'react-redux';
>>>>>>> 7ea4c0a43cf1cde374cccbbd6d5bb94fb4c4d631

import styled from '@emotion/styled';

import img from '../img/Saly-10.svg';

import SignUpContainer from '../containers/SignUpContainer';

<<<<<<< HEAD
import { loadItem } from '../services/storage';
=======
import {
  initializeSignUpFields,
} from '../actions';
>>>>>>> 7ea4c0a43cf1cde374cccbbd6d5bb94fb4c4d631

const Image = styled.img({
  display: 'absolute',
  width: '40vw',
  height: '100vh',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
});

export default function SignUpPage() {
<<<<<<< HEAD
  const navigate = useNavigate();

  const accessToken = loadItem('accessToken');

  useEffect(() => {
    if (accessToken) navigate('/root');
=======
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeSignUpFields());
>>>>>>> 7ea4c0a43cf1cde374cccbbd6d5bb94fb4c4d631
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
