import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import Header from '../components/login/Header';
import SocialLogins from '../components/login/SocialLogins';
import LoginForm from '../components/login/LoginForm';
import Divider from '../components/login/Divider';
import LoginButton from '../components/login/LoginButton';

import { get } from '../utils';

import { loadItem } from '../services/storage';

import {
  setLoginField,
  login,
} from '../actions';

export default function LoginContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const TOKEN = useSelector(get('TOKEN')) || loadItem('TOKEN');
  const logIn = useSelector(get('login'));
  const { email, password } = logIn;

  // 토큰이 있으면 /root page로 redirect
  useEffect(() => {
    if (TOKEN) navigate('/root');
  }, [TOKEN]);

  const handleChange = ({ name: key, value }) => {
    dispatch(setLoginField({ key, value }));
  };

  const handleLogin = () => {
    dispatch(login({ email, password }));
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
      <LoginForm
        email={email}
        password={password}
        onChange={handleChange}
      />
      <LoginButton
        onClick={handleLogin}
      />
    </div>
  );
}
