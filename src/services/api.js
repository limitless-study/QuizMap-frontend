import { loadItem } from './storage';

import KAKAO_AUTH_URL from './KakaoOAuth';

export async function fetchCardsetInfo(cardsetId) {
  const accessToken = loadItem('accessToken');
  const url = `https://www.quizmap.co.kr/api/cardsets/${cardsetId}/info`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await response.json();
  return data;
}

export async function fetchCardsetChildren(cardsetId) {
  const accessToken = loadItem('accessToken');
  const url = `https://www.quizmap.co.kr/api/cardsets/${cardsetId}/children`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await response.json();
  return data;
}

export async function fetchCardsetCards(cardsetId) {
  const accessToken = loadItem('accessToken');
  const url = `https://www.quizmap.co.kr/api/cardsets/${cardsetId}/cards`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await response.json();
  return data;
}

export async function fetchMindMapCards(cardsetId) {
  const accessToken = loadItem('accessToken');
  const url = `https://www.quizmap.co.kr/api/cardsets/${cardsetId}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await response.json();
  return data;
}

export async function patchCardsetTitle({ id, topic }) {
  const accessToken = loadItem('accessToken');
  const url = `https://www.quizmap.co.kr/api/cardsets/${id}`;
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ id, topic }),
  });
  const data = await response.json();
  return data;
}

export async function patchCardsetDueDateTime({ id, dueDateTime }) {
  const accessToken = loadItem('accessToken');
  const url = `https://www.quizmap.co.kr/api/cardsets/${id}/due-date-time`;
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ dueDateTime }),
  });
  const data = await response.json();
  return data;
}

export async function postNewCardset(cardsetId) {
  const accessToken = loadItem('accessToken');
  const url = `https://www.quizmap.co.kr/api/cardsets/${cardsetId}/cardset`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ topic: 'Untitled' }),
  });
  const { id } = await response.json();
  return id;
}

export async function patchCardsetCard({
  cardId, topic, answer,
}) {
  const accessToken = loadItem('accessToken');
  const url = `https://www.quizmap.co.kr/api/cards/${cardId}`;
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ topic, answer }),
  });
  const data = await response.json();
  return data;
}

export async function postNewCard({ cardsetId, topic, answer }) {
  const accessToken = loadItem('accessToken');
  const url = `https://www.quizmap.co.kr/api/cardsets/${cardsetId}/card`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ topic, answer }),
  });
  const data = await response.json();
  return data;
}

export async function deleteCardset(cardsetId) {
  const accessToken = loadItem('accessToken');
  const url = `https://www.quizmap.co.kr/api/cardsets/${cardsetId}`;
  await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

export async function deleteCard(cardId) {
  const accessToken = loadItem('accessToken');
  const url = `https://www.quizmap.co.kr/api/cards/${cardId}`;
  await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

export async function fetchLearnCardsInSequence(cardsetId) {
  const accessToken = loadItem('accessToken');
  const url = `https://www.quizmap.co.kr/api/cardsets/${cardsetId}/learn/sequence`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await response.json();
  return data;
}

export async function postCardTryCount({
  id, tryCount, learningDateTime, learningSeconds,
}) {
  const accessToken = loadItem('accessToken');
  const url = `https://www.quizmap.co.kr/api/cards/${id}/learning-log`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      tryCount, learningDateTime, learningSeconds,
    }), // TODO: learningSecond's'
  });
  const data = await response.json();
  return data;
}

export async function patchStarCount({ id, starCount }) {
  const accessToken = loadItem('accessToken');
  const url = `https://www.quizmap.co.kr/api/cards/${id}/star`;
  const response = await fetch(url, {
    // method: 'PATCH',
    method: 'POST', // TODO : 나중에 백엔드에서 PATCH로 바꿔주면 수정하기
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ starCount }),
  });
  const data = await response.json();
  return data;
}

export async function postSignUp({ email, name, password }) {
  const url = 'https://www.quizmap.co.kr/api/users';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, name, password }),
  });
  const data = await response.json();
  return data;
}

export async function postLogin({ email, password }) {
  const url = 'https://www.quizmap.co.kr/api/session';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  return data;
}

export async function postLogout() {
  const accessToken = loadItem('accessToken');
  const url = 'https://www.quizmap.co.kr/api/users/logout';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await response.json();
  return data;
}

export async function googleLogin(code) {
  const url = 'https://www.quizmap.co.kr/api/session/google';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
  });
  const data = await response.json();
  return data;
}

export async function kakaoLogin(code) {
  const url = 'https://www.quizmap.co.kr/api/session/kakao';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
  });
  const data = await response.json();
  return data;
}
