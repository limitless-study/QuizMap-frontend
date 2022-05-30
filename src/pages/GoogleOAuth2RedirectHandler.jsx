import { useDispatch } from 'react-redux';

import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import {
  loginWithGoogle,
} from '../actions';

import Loading from '../components/common/Loading';

function GoogleOAuth2RedirectHandler() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // 인가코드
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(async () => {
    await dispatch(loginWithGoogle(code, navigate));
  }, []);

  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
    >
      <Loading
        size={80}
      />
    </div>
  );
}

export default GoogleOAuth2RedirectHandler;
