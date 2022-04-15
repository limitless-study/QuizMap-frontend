export async function fetchCardsetInfo(cardsetId) {
  const url = `http://localhost:1205/api/cardsets/${cardsetId}/info`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchCardsetChildren(cardsetId) {
  const url = `http://localhost:1205/api/cardsets/${cardsetId}/children`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchCardsetCards(cardsetId) {
  const url = `http://localhost:1205/api/cardsets/${cardsetId}/cards`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchMindMapCards(cardsetId) {
  const url = `http://localhost:1205/api/cardsets/${cardsetId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function patchCardsetTitle({ id, name }) {
  const url = `http://localhost:1205/api/cardsets/${id}`;
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, name }),
  });
  const { name: topic } = await response.json();
  return topic;
}

export async function postNewCardset(cardsetId) {
  const url = `http://localhost:1205/api/cardsets/${cardsetId}/cardset`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: 'Untitled' }),
  });
  const { id } = await response.json();
  return id;
}

export async function patchCardsetCard({
  cardId, question, answer,
}) {
  const url = `http://localhost:1205/api/cards/${cardId}`;
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question, answer }),
  });
  const data = await response.json();
  return data;
}

export async function postNewCard({ cardsetId, question, answer }) {
  const url = `http://localhost:1205/api/cardsets/${cardsetId}/card`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question, answer }),
  });
  const data = await response.json();
  return data;
}

export async function deleteCardset(cardsetId) {
  const url = `http://localhost:1205/api/cardsets/${cardsetId}`;
  await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function deleteCard(cardId) {
  const url = `http://localhost:1205/api/cards/${cardId}`;
  await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function fetchLearnCardsInSequence(cardsetId) {
  const url = `http://localhost:1205/api/cardsets/${cardsetId}/learn/sequence`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function postCardTryCount(cardId, tryCount) {
  const url = `http://localhost:1205/api/cards/${cardId}/feedback`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ tryCount }),
  });
  const data = await response.json();
  return data;
}
