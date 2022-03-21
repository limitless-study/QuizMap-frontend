import {
  fetchCardsetInfo,
  fetchCardsetChildren,
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

export function changeCardsetTitle({ name, value }) {
  return {
    type: 'changeCardsetTitle',
    payload: { name, value },
  };
}

export function makeCard({ id, question, answer }) {
  return {
    type: 'makeCard',
    payload: { id, question, answer },
  };
}

export function setNewCardId(newCardId) {
  return {
    type: 'setNewCardId',
    payload: { newCardId },
  };
}

export function setCurrentCardId(currentCardId) {
  return {
    type: 'setCurrentCardId',
    payload: { currentCardId },
  };
}

export function clickCard(id) {
  return (dispatch) => {
    dispatch(setCurrentCardId(id));
  };
}

export function addNewCard() {
  return (dispatch, getState) => {
    const { newCardId } = getState();

    dispatch(setCurrentCardId(newCardId + 1));
    dispatch(setNewCardId(newCardId + 1));
    dispatch(makeCard({
      id: newCardId + 1,
      question: '',
      answer: '',
    }));
  };
}

export function updateCard({ currentCardId, name, value }) {
  return {
    type: 'updateCard',
    payload: { currentCardId, name, value },
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

export function saveCardset(cardset) {
  return (dispatch) => {
    dispatch(addNewCardset(cardset));
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
  return (dispatch) => {
    const cardsetInfo = fetchCardsetInfo(cardsetId);
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
  return (dispatch) => {
    const cardsetChildren = fetchCardsetChildren(cardsetId);
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
  return (dispatch) => {
    const rootCardsets = fetchCardsetChildren(0);
    dispatch(setRootCardsets(rootCardsets));
  };
}
