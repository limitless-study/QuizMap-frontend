import {
  fetchCardsetInfo,
  fetchCardsetChildren,
  fetchCardsetCards,
  fetchLearnCardsInSequence,
  fetchMindMapCards,
  deleteCardset,
  patchCardsetTitle,
  postNewCard,
  patchCardsetCard,
  patchStarCount,
  postNewCardset,
  postCardTryCount,
  deleteCard,
  patchCardsetDueDateTime,
  postSignUp,
  postLogin,
  googleLogin,
  kakaoLogin,
  fetchUserInfo,
} from './services/api';

import { saveItem } from './services/storage';

export function setFlipped(flipped) {
  return {
    type: 'setFlipped',
    payload: { flipped },
  };
}

export function setCurrentCardIndex(currentCardIndex) {
  return {
    type: 'setCurrentCardIndex',
    payload: { currentCardIndex },
  };
}

export function setNewCardIndex(newCardIndex) {
  return {
    type: 'setNewCardIndex',
    payload: { newCardIndex },
  };
}

export function flipCard() {
  return (dispatch, getState) => {
    const { flipped } = getState();
    dispatch(setFlipped(!flipped));
  };
}

export function setIsLastPage(isLastPage) {
  return {
    type: 'setIsLastPage',
    payload: { isLastPage },
  };
}

export function nextCard() {
  return (dispatch, getState) => {
    const { cards } = getState();

    if (cards.length > 0) {
      dispatch(setFlipped(false));
    } else {
      dispatch(setIsLastPage(true));
    }
  };
}

export function setTitleChanged(isTitleChanged) {
  return {
    type: 'setTitleChanged',
    payload: { isTitleChanged },
  };
}

export function setDueDateTimeChanged(isDueDateTimeChanged) {
  return {
    type: 'setDueDateTimeChanged',
    payload: { isDueDateTimeChanged },
  };
}

export function setCardsetTitle(cardsetTitle) {
  return {
    type: 'setCardsetTitle',
    payload: { cardsetTitle },
  };
}

export function setDueDateTime(dueDateTime) {
  return {
    type: 'setDueDateTime',
    payload: { dueDateTime },
  };
}

export function changeCardsetDueDateTime(dueDateTime) {
  return (dispatch) => {
    dispatch(setDueDateTime(dueDateTime));
    dispatch(setDueDateTimeChanged(true));
  };
}

export function setCardsetId(cardsetId) {
  return {
    type: 'setCardsetId',
    payload: { cardsetId },
  };
}

export function changeCardsetTitle(cardsetTitle) {
  return (dispatch) => {
    dispatch(setCardsetTitle(cardsetTitle));
    dispatch(setTitleChanged(true));
  };
}

export function setCards(cards) {
  return {
    type: 'setCards',
    payload: { cards },
  };
}

export function setMindMapCards(mindMapCards) {
  return {
    type: 'setMindMapCards',
    payload: { mindMapCards },
  };
}

export function makeCard({
  id, cardIndex, topic, answer, cardChanged, cardAdded, cardDeleted,
}) {
  return {
    type: 'makeCard',
    payload: {
      id, cardIndex, topic, answer, cardChanged, cardAdded, cardDeleted,
    },
  };
}

export function clickCard(cardIndex) {
  return (dispatch) => {
    dispatch(setCurrentCardIndex(cardIndex));
  };
}

export function addNewCard() {
  return (dispatch, getState) => {
    const { newCardIndex } = getState();

    dispatch(setCurrentCardIndex(newCardIndex));
    dispatch(setNewCardIndex(newCardIndex + 1));
    dispatch(makeCard({
      id: -1,
      cardIndex: newCardIndex,
      topic: '',
      answer: '',
      cardChanged: false,
      cardAdded: true,
      cardDeleted: false,
    }));
  };
}

export function updateCard(currentCardIndex, name, value) {
  return {
    type: 'updateCard',
    payload: {
      currentCardIndex, name, value, cardChanged: true,
    },
  };
}
export function initializeCardset() {
  return {
    type: 'initializeCardset',
  };
}

export function saveCardset(cardsetId) {
  return async (dispatch, getState) => {
    // patch topic
    const { isTitleChanged, isDueDateTimeChanged } = getState();

    if (isTitleChanged) {
      const { cardsetTitle } = getState();
      patchCardsetTitle({ id: cardsetId, topic: cardsetTitle });
    }

    // patch due date
    if (isDueDateTimeChanged) {
      const { dueDateTime } = getState();
      const year = dueDateTime.getFullYear();
      const month = (`00${dueDateTime.getMonth() + 1}`).slice(-2);
      const day = (`00${dueDateTime.getDate()}`).slice(-2);
      const hour = (`00${dueDateTime.getHours()}`).slice(-2);
      const minute = (`00${dueDateTime.getMinutes()}`).slice(-2);
      const date = `${year}${month}${day}${hour}${minute}`;
      patchCardsetDueDateTime({ id: cardsetId, dueDateTime: date });
    }

    // patch cards
    const { cards } = getState();

    for (const card of cards) {
      if (card.cardDeleted && !card.cardAdded) {
        await deleteCard(card.id);
      } else if (card.cardAdded) {
        await postNewCard({ cardsetId, topic: card.topic, answer: card.answer });
      } else if (card.cardChanged) {
        await patchCardsetCard({
          cardsetId, cardId: card.id, topic: card.topic, answer: card.answer,
        });
      }
    }
  };
}

export function addNewCardset(id) {
  return async (dispatch) => {
    await dispatch(saveCardset(id));
    // TODO: Saving... 뜨도록?
    dispatch(setCardsetId(await postNewCardset(id)));
  };
}

export function setCardsetInfo(cardsetInfo) {
  return {
    type: 'setCardsetInfo',
    payload: { cardsetInfo },
  };
}

export function loadCardsetInfo(cardsetId) {
  return async (dispatch) => {
    const cardsetInfo = await fetchCardsetInfo(cardsetId);
    dispatch(setCardsetInfo(cardsetInfo));
  };
}

export function loadMindMapCards(cardsetId) {
  return async (dispatch) => {
    const mindMapCards = await fetchMindMapCards(cardsetId);
    dispatch(setMindMapCards(mindMapCards));
  };
}

export function setCardsetChildren(cardsetChildren) {
  return {
    type: 'setCardsetChildren',
    payload: { cardsetChildren },
  };
}

export function loadCardsetChildren(cardsetId) {
  return async (dispatch) => {
    const cardsetChildren = await fetchCardsetChildren(cardsetId);
    dispatch(setCardsetChildren(cardsetChildren));
  };
}

export function setRootCardsets(rootCardsets) {
  return {
    type: 'setRootCardsets',
    payload: { rootCardsets },
  };
}

export function setClickedCardsetId(clickedCardsetId) {
  return {
    type: 'setClickedCardsetId',
    payload: { clickedCardsetId },
  };
}

export function setClickedCardIndex(clickedCardIndex) {
  return {
    type: 'setClickedCardIndex',
    payload: { clickedCardIndex },
  };
}

export function expandViewMoreButton(target) {
  return (dispatch) => {
    if (target.type === 'CARDSET') {
      dispatch(setClickedCardsetId(target.id));
    } else {
      dispatch(setClickedCardIndex(target.cardIndex));
    }
  };
}

export function contractViewMoreButton() {
  return (dispatch) => {
    dispatch(setClickedCardsetId(null));
    dispatch(setClickedCardIndex(null));
  };
}

export function initializeCards(cards) {
  return (dispatch, getState) => {
    dispatch(setNewCardIndex(1));
    const initializedCards = cards.map((card) => {
      const { newCardIndex } = getState();
      Object.assign(card, { cardIndex: newCardIndex });
      Object.assign(card, { cardChanged: false });
      Object.assign(card, { cardAdded: false });
      Object.assign(card, { cardDeleted: false });
      Object.assign(card, { starCountChanged: false });
      Object.assign(card, { tryCount: 1 });
      dispatch(setNewCardIndex(newCardIndex + 1));
      return card;
    });
    dispatch(setCards(initializedCards));
  };
}

export function loadCards(id) {
  return async (dispatch, getState) => {
    const cardsetCards = await fetchCardsetCards(id);
    if (cardsetCards.length === 0) {
      const { newCardIndex } = getState();
      dispatch(makeCard({
        id: -1,
        cardIndex: 1,
        topic: '',
        answer: '',
        cardChanged: false,
        cardAdded: true,
        cardDeleted: false,
      }));
      dispatch(setNewCardIndex(newCardIndex + 1));
    } else {
      dispatch(initializeCards(cardsetCards));
    }
  };
}

export function loadLearnCardsInSequence(cardsetId) {
  return async (dispatch) => {
    const cardsInSequence = await fetchLearnCardsInSequence(cardsetId);

    // if no cards
    if (cardsInSequence.length === 0) {
      dispatch(setIsLastPage(true));
    } else {
      dispatch(initializeCards(cardsInSequence));
    }
  };
}

export function clickWrongCard(id) {
  return async (dispatch, getState) => {
    const { cards } = getState();
    const index = cards.findIndex((card) => card.id === id);
    cards[index].tryCount += 1;

    // patch starCount if changed
    const { starCount, starCountChanged } = cards[index];
    if (starCountChanged) {
      await patchStarCount({ id, starCount });
    }

    const filteredCards = cards.filter((card) => card.id !== id);
    const newCards = filteredCards.concat([cards[index]]);
    dispatch(setCards(newCards));
    dispatch(nextCard(id));
  };
}

export function clickCorrectCard(id) {
  return async (dispatch, getState) => {
    const { cards } = getState();
    const filteredCards = cards.filter((card) => card.id !== id);

    const today = new Date();
    const year = today.getFullYear();
    const month = (`00${today.getMonth() + 1}`).slice(-2);
    const day = (`00${today.getDate()}`).slice(-2);
    const hour = (`00${today.getHours()}`).slice(-2);
    const minute = (`00${today.getMinutes()}`).slice(-2);
    const learningDateTime = `${year}${month}${day}${hour}${minute}`;

    const { tryCount } = cards[0];

    // patch starCount if changed
    const { starCount, starCountChanged } = cards[0];

    if (starCountChanged) {
      await patchStarCount({ id, starCount });
    }

    const learningSeconds = 100; // TODO : fix
    await postCardTryCount({
      id, tryCount, learningDateTime, learningSeconds,
    });
    dispatch(setCards(filteredCards));
    dispatch(nextCard(id));
  };
}

export function initializeCardsetStudio(id) {
  return async (dispatch, getState) => {
    dispatch(setDueDateTime(''));
    dispatch(setTitleChanged(false));
    dispatch(setDueDateTimeChanged(false));
    dispatch(setCurrentCardIndex(1));
    dispatch(setNewCardIndex(1));
    dispatch(initializeCards([]));
    dispatch(contractViewMoreButton());

    await dispatch(loadCardsetInfo(id));
    await dispatch(loadCards(id));

    const { cardsetInfo, dueDate } = getState();
    const { topic } = cardsetInfo;

    dispatch(setCardsetTitle(topic));
    dispatch(setDueDateTime(dueDate));
  };
}

export function setNotesHidden(isNotesHidden) {
  return {
    type: 'setNotesHidden',
    payload: { isNotesHidden },
  };
}

export function setNotes(notes) {
  return {
    type: 'setNotes',
    payload: { notes },
  };
}

export function initializeLearnPage(id) {
  return async (dispatch) => {
    dispatch(setNotesHidden(true));
    dispatch(setNotes(''));
    dispatch(setIsLastPage(false));
    dispatch(setFlipped(false));
    dispatch(setCards([]));
    await dispatch(loadCardsetInfo(id));
    await dispatch(loadLearnCardsInSequence(id));
  };
}

export function deleteClickedCard(target) {
  return async (dispatch, getState) => {
    const { cardIndex } = target;
    const { cards } = getState();
    const filteredCards = [...cards];
    const deleteCardIndex = filteredCards.findIndex((card) => card.cardIndex === cardIndex);
    filteredCards[deleteCardIndex].cardDeleted = true;
    dispatch(setCards(filteredCards));
  };
}

export function changeStarCount({ id, starCount }) {
  return (dispatch, getState) => {
    const { cards } = getState();
    const changedCards = [...cards];
    const starChangedCardIndex = changedCards.findIndex((card) => card.id === id);
    changedCards[starChangedCardIndex].starCount = starCount;
    changedCards[starChangedCardIndex].starCountChanged = true;
    dispatch(setCards(changedCards));
  };
}

// sign-up
export function setSignUpField({ key, value }) {
  return {
    type: 'setSignUpField',
    payload: { key, value },
  };
}

// login
export function setLoginField({ key, value }) {
  return {
    type: 'setLoginField',
    payload: { key, value },
  };
}

export function setToken(accessToken) {
  return {
    type: 'setToken',
    payload: { accessToken },
  };
}

export function setUserInfo(userInfo) {
  return {
    type: 'setUserInfo',
    payload: { userInfo },
  };
}

export function getUserInfo() {
  return async (dispatch) => {
    const userInfo = await fetchUserInfo();
    const { email, rootCardSetId } = userInfo;

    saveItem('email', email);
    saveItem('rootCardSetId', rootCardSetId);

    dispatch(setUserInfo(userInfo));

    return userInfo;
  };
}

export function loadRootCardsets() {
  return async (dispatch, getState) => {
    const { userInfo } = getState();
    const { rootCardSetId } = userInfo;

    const root = await fetchCardsetChildren(rootCardSetId);

    const rootCardsets = root.filter((cardset) => cardset.type === 'CARDSET');
    dispatch(setRootCardsets(rootCardsets));
  };
}

export function deleteClickedCardset(cardsetId) {
  return async (dispatch) => {
    await deleteCardset(cardsetId);
    dispatch(loadRootCardsets());
  };
}

export function initializeCardsetPage(id) {
  return async (dispatch) => {
    await dispatch(loadRootCardsets());
    await dispatch(loadCardsetInfo(id));
    await dispatch(loadCardsetChildren(id));
  };
}

export function loginWithGoogle(code, navigate) {
  return async (dispatch) => {
    try {
      const response = await googleLogin(code, navigate);

      const { accessToken } = response;

      if (accessToken) {
        dispatch(setToken(accessToken));
        saveItem('accessToken', accessToken);
        await dispatch(getUserInfo());
        navigate('/root');
      }
    } catch (e) {
      localStorage.removeItem('accessToken');
      navigate('/login');
    }
  };
}

export function loginWithKakao(code, navigate) {
  return async (dispatch) => {
    try {
      const { accessToken } = await kakaoLogin(code, navigate);

      if (accessToken) {
        dispatch(setToken(accessToken));
        saveItem('accessToken', accessToken);
        await dispatch(getUserInfo());
        navigate('/root');
      }
    } catch (e) {
      localStorage.removeItem('accessToken');
      navigate('/login');
    }
  };
}

export function login({ email, password }) {
  return async (dispatch) => {
    const response = await postLogin({ email, password });

    const { accessToken } = response;

    if (accessToken) {
      dispatch(setToken(accessToken));
      saveItem('accessToken', accessToken);
    }
  };
}

export function signUp({ email, name, password }) {
  return async (dispatch) => {
    const response = await postSignUp({ email, name, password });

    if (response.email) {
      dispatch(login({ email, password }));
    }
  };
}

export function logout() {
  return (dispatch) => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('email');
    localStorage.removeItem('rootCardSetId');
    dispatch(setToken(null));
    dispatch(setUserInfo({ email: '', rootCardsetId: null }));
  };
}

export function initializeLoginFields() {
  return (dispatch) => {
    dispatch(setLoginField({ key: 'email', value: '' }));
    dispatch(setLoginField({ key: 'password', value: '' }));
  };
}

export function initializeSignUpFields() {
  return (dispatch) => {
    dispatch(setSignUpField({ key: 'email', value: '' }));
    dispatch(setSignUpField({ key: 'name', value: '' }));
    dispatch(setSignUpField({ key: 'password', value: '' }));
  };
}

export function setToggleDropDown(toggleDropDown) {
  return {
    type: 'setToggleDropDown',
    payload: { toggleDropDown },
  };
}
