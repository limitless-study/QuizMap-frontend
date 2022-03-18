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
