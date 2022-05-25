import styled from '@emotion/styled';

import { FcGoogle } from 'react-icons/fc';
import { SiKakao, SiFacebook } from 'react-icons/si';

const SocialLoginBox = styled.button({
  width: '400px',
  height: '59px',
  backgroundColor: '#f5f7fb',
  border: '2px solid #eceffe',
  margin: '7px',
  lineHeight: '45px',
  borderRadius: '10px',
  cursor: 'pointer',
  fontSize: '16px',
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
        <FcGoogle />
        Login with Google
      </SocialLoginBox>
      <SocialLoginBox>
        <SiKakao />
        Login with kakao
      </SocialLoginBox>
      <SocialLoginBox>
        <SiFacebook color="#3b5998" />
        Login with Facebook
      </SocialLoginBox>
    </div>
  );
}