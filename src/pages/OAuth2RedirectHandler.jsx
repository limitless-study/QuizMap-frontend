import { useDispatch } from 'react-redux';

import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import {
  loginWithKakao,
} from '../actions';

function OAuth2RedirectHandler() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // 인가코드
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(async () => {
    await dispatch(loginWithKakao(code, navigate));
  }, []);

  return (
    <div>카카오 로그인 중</div>
  );
}

export default OAuth2RedirectHandler;
