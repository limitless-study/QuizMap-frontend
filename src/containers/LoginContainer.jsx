import Header from '../components/login/Header';
import SocialLogins from '../components/login/SocialLogins';
import LoginForm from '../components/login/LoginForm';
import Divider from '../components/login/Divider';
import LoginButton from '../components/login/LoginButton';

export default function LoginContainer() {
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
      <LoginForm />
      <LoginButton />
    </div>
  );
}
