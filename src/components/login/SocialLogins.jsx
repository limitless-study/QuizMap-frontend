import styled from '@emotion/styled';

import { FcGoogle } from 'react-icons/fc';
import { SiKakao, SiFacebook } from 'react-icons/si';

import KAKAO_AUTH_URL from '../../services/KakaoOAuth';
import GOOGLE_AUTO_URL from '../../services/GoogleOAuth';

const SocialLoginBox = styled.button({
  width: '400px',
  height: '59px',
  backgroundColor: '#f5f7fb',
  border: '2px solid #eceffe',
  margin: '7px',
  lineHeight: '45px',
  borderRadius: '10em',
  cursor: 'pointer',
  fontSize: '16px',
  '& a': {
    lineHeight: '59px',
    height: '59px',
    display: 'block',
  },
  ':hover': {
    backgroundColor: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 3px 5px',
    transition: '400ms',
  },
  '& svg': {
    paddingRight: '10px',
  },
});

export default function SocialLogins() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <SocialLoginBox>
        <a href={GOOGLE_AUTO_URL}>
          <FcGoogle />
          Login with Google
        </a>
      </SocialLoginBox>
      <SocialLoginBox>
        <a href={KAKAO_AUTH_URL}>
          <SiKakao />
          Login with kakao
        </a>
      </SocialLoginBox>
      {
      /* <SocialLoginBox>
        <SiFacebook color="#3b5998" />
        Login with Facebook
      </SocialLoginBox>
      */
      }
    </div>
  );
}
