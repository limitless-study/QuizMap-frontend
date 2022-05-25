import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import Header from '../components/signup/Header';
import SocialLogins from '../components/signup/SocialLogins';
import SignUpForm from '../components/signup/SignUpForm';
import Divider from '../components/signup/Divider';
import SignUpButton from '../components/signup/SignUpButton';

import { get } from '../utils';

import { loadItem } from '../services/storage';

import {
  setSignUpField,
  signUp,
} from '../actions';

export default function SignUpContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const accessToken = useSelector(get('accessToken')) || loadItem('accessToken');
  const signup = useSelector(get('signup'));
  const { email, name, password } = signup;

  // 토큰이 있으면 /root page로 redirect
  useEffect(() => {
    if (accessToken) navigate('/root');
  }, [accessToken]);

  const handleChange = ({ name: key, value }) => {
    dispatch(setSignUpField({ key, value }));
  };

  const handleSignUp = () => {
    dispatch(signUp({ email, name, password }));
  };

  return (
    <div style={{
      display: 'flex',
      width: '60vw',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      padding: '5em 0',
    }}
    >
      <Header />
      <SocialLogins />
      <Divider />
      <SignUpForm
        email={email}
        name={name}
        password={password}
        onChange={handleChange}
      />
      <SignUpButton
        onClick={handleSignUp}
      />
    </div>
  );
}
