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

export function changeCardsetTitle({ cardsetTitle }) {
  return {
    type: 'changeCardsetTitle',
    payload: { cardsetTitle },
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

    dispatch(setCurrentCardIndex(newCardIndex + 1));
    dispatch(setNewCardIndex(newCardIndex + 1));
    dispatch(makeCard({
      id: null,
      cardIndex: newCardIndex + 1,
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

export function setCards(cards) {
  return {
    type: 'setCards',
    payload: { cards },
  };
}

export function loadCards(id) {
  return (dispatch, getstate) => {
    const cardsetCards = fetchCardsetCards(id);

    if (cardsetCards.length === 0) {
      dispatch(makeCard(null, 1, '', ''));
    } else {
      const cards = cardsetCards.map((card) => {
        const { newCardIndex } = getstate();
        Object.assign(card, { cardIndex: newCardIndex });
        dispatch(setNewCardIndex(newCardIndex + 1));
        return card;
      });
      dispatch(setCards(cards));
    }
  };
}

export function initializeCardsetStudio(id) {
  console.log('initializeCardsetStudio', id);
  return (dispatch, getState) => {
    dispatch(setCurrentCardIndex(1));
    dispatch(setNewCardIndex(1));

    dispatch(loadCards(id));
    dispatch(loadCardsetInfo(id));

    const { cardsetInfo, cards } = getState();
    const { name } = cardsetInfo;

    console.log('cards', cards);

    dispatch(changeCardsetTitle({ cardsetTitle: name }));
  };
}

export function initializeCardsetPage(id) {
  console.log('initializeCardsetPage', id);
  return (dispatch) => {
    dispatch(loadRootCardsets());
    dispatch(loadCardsetInfo(id));
    dispatch(loadCardsetChildren(id));
  };
}
