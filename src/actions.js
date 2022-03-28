import {
  fetchCardsetInfo,
  fetchCardsetChildren,
  fetchCardsetCards,
} from './services/api';

export function setFlipped(flipped) {
  return {
    type: 'setFlipped',
    payload: { flipped },
  };
}

export function setCardIndex(cardIndex) {
  return {
    type: 'setCardIndex',
    payload: { cardIndex },
  };
}

export function initializeCard() {
  return (dispatch) => {
    dispatch(setFlipped(false));
    dispatch(setCardIndex(0));
  };
}

export function flipCard() {
  return (dispatch, getState) => {
    const { flipped } = getState();
    dispatch(setFlipped(!flipped));
  };
}

export function nextCard(cardIndex) {
  return (dispatch, getState) => {
    const { cards } = getState();

    if (cardIndex < cards.length - 1) {
      dispatch(setCardIndex(cardIndex + 1));
    } else {
      dispatch(setCardIndex(cards.length - 1));
    }

    dispatch(setFlipped(false));
  };
}

export function setTitleChanged(isTitleChanged) {
  return {
    type: 'setTitleChanged',
    payload: { isTitleChanged },
  };
}

export function setCardsetTitle(cardsetTitle) {
  return {
    type: 'setCardsetTitle',
    payload: { cardsetTitle },
  };
}

export function changeCardsetTitle(cardsetTitle) {
  return (dispatch) => {
    dispatch(setCardsetTitle(cardsetTitle));
    dispatch(setTitleChanged(true));
  };
}

export function makeCard({
  id, cardIndex, question, answer,
}) {
  return {
    type: 'makeCard',
    payload: {
      id, cardIndex, question, answer,
    },
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
      question: '',
      answer: '',
    }));
  };
}

export function updateCard({ currentCardIndex, name, value }) {
  return {
    type: 'updateCard',
    payload: { currentCardIndex, name, value },
  };
}

export function addNewCardset(cardset) {
  return {
    type: 'addNewCardset',
    payload: { cardset },
  };
}

export function initializeCardset() {
  return {
    type: 'initializeCardset',
  };
}

export function saveCardset({ cardsetId, cardsetTitle, cards }) {
  return (dispatch) => {
    dispatch(addNewCardset());
    dispatch(initializeCardset());
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

export function loadRootCardsets() {
  return async (dispatch) => {
    const root = await fetchCardsetChildren(1);
    const rootCardsets = root.filter((cardset) => cardset.type === 'CARDSET');
    dispatch(setRootCardsets(rootCardsets));
  };
}

export function setCards(cards) {
  return {
    type: 'setCards',
    payload: { cards },
  };
}

export function initializeCards(cards) {
  return (dispatch) => {
    dispatch(setCards(cards));
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
        question: '',
        answer: '',
      }));
      dispatch(setNewCardIndex(newCardIndex + 1));
    } else {
      const cards = cardsetCards.map((card) => {
        const { newCardIndex } = getState();
        // TODO:
        Object.assign(card, { cardIndex: newCardIndex });
        dispatch(setNewCardIndex(newCardIndex + 1));
        return card;
      });
      dispatch(setCards(cards));
    }
  };
}

export function initializeCardsetStudio(id) {
  return async (dispatch, getState) => {
    dispatch(setTitleChanged(false));
    dispatch(setCurrentCardIndex(1));
    dispatch(setNewCardIndex(1));
    dispatch(initializeCards([]));

    await dispatch(loadCardsetInfo(id));
    await dispatch(loadCards(id));

    const { cardsetInfo } = getState();
    const { name } = cardsetInfo;

    dispatch(setCardsetTitle(name));
  };
}

export function initializeCardsetPage(id) {
  return async (dispatch) => {
    await dispatch(loadRootCardsets());
    await dispatch(loadCardsetInfo(id));
    await dispatch(loadCardsetChildren(id));
  };
}
