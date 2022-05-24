import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/signup/Header';
import SocialLogins from '../components/signup/SocialLogins';
import SignUpForm from '../components/signup/SignUpForm';
import Divider from '../components/signup/Divider';
import SignUpButton from '../components/signup/SignUpButton';

import { get } from '../utils';

import {
  setEmail,
  setName,
  setPassword,
  signUp,
} from '../actions';

export default function SignUpContainer() {
  const dispatch = useDispatch();

  const TOKEN = useSelector(get('TOKEN'));
  const email = useSelector(get('email'));
  const name = useSelector(get('name'));
  const password = useSelector(get('password'));

  const handleChange = ({ name: target, value }) => {
    if (target === 'email') {
      return dispatch(setEmail(value));
    }
    if (target === 'name') {
      return dispatch(setName(value));
    }
    return dispatch(setPassword(value));
  };

  const handleSignUp = () => {
    dispatch(signUp({ email, name, password }));
  };

  if (TOKEN) {
    console.log('TOKEN >>>>>', TOKEN);
  }

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
        type="password"
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
