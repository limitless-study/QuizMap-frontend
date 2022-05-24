import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/login/Header';
import SocialLogins from '../components/login/SocialLogins';
import LoginForm from '../components/login/LoginForm';
import Divider from '../components/login/Divider';
import LoginButton from '../components/login/LoginButton';

import { get } from '../utils';

import {
  setEmail,
  setPassword,
  login,
} from '../actions';

export default function LoginContainer() {
  const dispatch = useDispatch();

  const email = useSelector(get('email'));
  const password = useSelector(get('password'));
  const TOKEN = useSelector(get('TOKEN'));

  const handleChange = ({ name: target, value }) => {
    if (target === 'email') {
      return dispatch(setEmail(value));
    }
    return dispatch(setPassword(value));
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
