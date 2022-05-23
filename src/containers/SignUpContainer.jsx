import Header from '../components/signup/Header';
import SocialLogins from '../components/signup/SocialLogins';
import SignUpForm from '../components/signup/SignUpForm';
import Divider from '../components/signup/Divider';
import SignUpButton from '../components/signup/SignUpButton';

export default function SignUpContainer() {
  return (
    <div style={{
      display: 'flex',
      width: '60vw',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
    }}
    >
      <Header />
      <SocialLogins />
      <Divider />
      <SignUpForm />
      <SignUpButton />
    </div>
  );
}
