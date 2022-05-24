export async function fetchCardsetInfo(cardsetId) {
  const url = `http://www.quizmap.co.kr:1205/api/cardsets/${cardsetId}/info`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchCardsetChildren(cardsetId) {
  const url = `http://www.quizmap.co.kr:1205/api/cardsets/${cardsetId}/children`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchCardsetCards(cardsetId) {
  const url = `http://www.quizmap.co.kr:1205/api/cardsets/${cardsetId}/cards`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchMindMapCards(cardsetId) {
  const url = `http://www.quizmap.co.kr:1205/api/cardsets/${cardsetId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function patchCardsetTitle({ id, topic }) {
  const url = `http://www.quizmap.co.kr:1205/api/cardsets/${id}`;
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, topic }),
  });
  const data = await response.json();
  return data;
}

export async function patchCardsetDueDateTime({ id, dueDateTime }) {
  const url = `http://www.quizmap.co.kr:1205/api/cardsets/${id}/due-date-time`;
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ dueDateTime }),
  });
  const data = await response.json();
  return data;
}

export async function postNewCardset(cardsetId) {
  const url = `http://www.quizmap.co.kr:1205/api/cardsets/${cardsetId}/cardset`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ topic: 'Untitled' }),
  });
  const { id } = await response.json();
  return id;
}

export async function patchCardsetCard({
  cardId, topic, answer,
}) {
  const url = `http://www.quizmap.co.kr:1205/api/cards/${cardId}`;
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ topic, answer }),
  });
  const data = await response.json();
  return data;
}

export async function postNewCard({ cardsetId, topic, answer }) {
  const url = `http://www.quizmap.co.kr:1205/api/cardsets/${cardsetId}/card`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ topic, answer }),
  });
  const data = await response.json();
  return data;
}

export async function deleteCardset(cardsetId) {
  const url = `http://www.quizmap.co.kr:1205/api/cardsets/${cardsetId}`;
  await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function deleteCard(cardId) {
  const url = `http://www.quizmap.co.kr:1205/api/cards/${cardId}`;
  await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function fetchLearnCardsInSequence(cardsetId) {
  const url = `http://www.quizmap.co.kr:1205/api/cardsets/${cardsetId}/learn/sequence`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function postCardTryCount({
  id, tryCount, learningDateTime, learningSeconds,
}) {
  const url = `http://www.quizmap.co.kr:1205/api/cards/${id}/learning-log`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      tryCount, learningDateTime, learningSeconds,
    }), // TODO: learningSecond's'
  });
  const data = await response.json();
  return data;
}

export async function patchStarCount({ id, starCount }) {
  const url = `http://www.quizmap.co.kr:1205/api/cards/${id}/star`;
  const response = await fetch(url, {
    // method: 'PATCH',
    method: 'POST', // TODO : 나중에 백엔드에서 PATCH로 바꿔주면 수정하기
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ starCount }),
  });
  const data = await response.json();
  return data;
}

export async function postSignUp({ email, name, password }) {
  const url = 'http://www.quizmap.co.kr:1205/api/users';
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
  console.log('postLogin', email, password);

  const url = 'http://www.quizmap.co.kr:1205/api/session';
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
