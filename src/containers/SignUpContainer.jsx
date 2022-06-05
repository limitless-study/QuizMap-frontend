import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/signup/Header';
import SocialLogins from '../components/signup/SocialLogins';
import SignUpForm from '../components/signup/SignUpForm';
import Divider from '../components/signup/Divider';
import SignUpButton from '../components/signup/SignUpButton';

import { get } from '../utils';

import {
  setSignUpField,
  signUp,
} from '../actions';

export default function SignUpContainer() {
  const dispatch = useDispatch();

  const accessToken = useSelector(get('accessToken'));
  const signup = useSelector(get('signup'));
  const { email, name, password } = signup;

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
      <Header
        accessToken={accessToken}
      />
      <SocialLogins />
      {
        /*
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
      */
      }
    </div>
  );
}
