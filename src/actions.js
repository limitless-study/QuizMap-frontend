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
  postNewCardset,
  postCardTryCount,
  deleteCard,
  patchCardsetDueDateTime,
} from './services/api';

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
  id, cardIndex, question, answer, cardChanged, cardAdded, cardDeleted,
}) {
  return {
    type: 'makeCard',
    payload: {
      id, cardIndex, question, answer, cardChanged, cardAdded, cardDeleted,
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
      question: '',
      answer: '',
      cardChanged: false,
      cardAdded: true,
      cardDeleted: false,
    }));
  };
}

export function updateCard({ currentCardIndex, name, value }) {
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
  return (dispatch, getState) => {
    // patch topic
    const { isTitleChanged, isDueDateChanged } = getState();

    if (isTitleChanged) {
      const { cardsetTitle } = getState();
      patchCardsetTitle({ id: cardsetId, name: cardsetTitle });
    }

    // patch due date
    if (isDueDateChanged) {
      const { dueDate } = getState();
      const year = dueDate.getFullYear();
      const month = (`00${dueDate.getMonth() + 1}`).slice(-2);
      const day = (`00${dueDate.getDate()}`).slice(-2);
      const hour = (`00${dueDate.getHours()}`).slice(-2);
      const minute = (`00${dueDate.getMinutes()}`).slice(-2);
      const date = `${year}${month}${day}${hour}${minute}`;
      patchCardsetDueDateTime({ id: cardsetId, dueDate: date });
    }

    // patch cards
    const { cards } = getState();

    cards.forEach((card) => {
      if (card.cardDeleted) {
        if (!card.cardAdded) {
          // delete origin cards
          deleteCard(card.id);
        }
      } else if (card.cardAdded) {
        // post added cards
        postNewCard({ cardsetId, question: card.question, answer: card.answer });
      } else if (card.cardChanged) {
        // patch changed cards
        patchCardsetCard({
          cardsetId, cardId: card.id, question: card.question, answer: card.answer,
        });
      }
    });
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

export function loadRootCardsets() {
  return async (dispatch) => {
    const root = await fetchCardsetChildren(1);
    const rootCardsets = root.filter((cardset) => cardset.type === 'CARDSET');
    dispatch(setRootCardsets(rootCardsets));
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
        question: '',
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

export function clickWrongCard(cardId) {
  return (dispatch, getState) => {
    const { cards } = getState();
    const index = cards.findIndex((card) => card.id === cardId);
    cards[index].tryCount += 1;
    const filteredCards = cards.filter((card) => card.id !== cardId);
    const newCards = filteredCards.concat([cards[index]]);
    dispatch(setCards(newCards));
    dispatch(nextCard(cardId));
  };
}

export function clickCorrectCard(cardId) {
  return async (dispatch, getState) => {
    const { cards } = getState();
    const filteredCards = cards.filter((card) => card.id !== cardId);
    await postCardTryCount(cardId, cards[0].tryCount);
    dispatch(setCards(filteredCards));
    dispatch(nextCard(cardId));
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
    const { name } = cardsetInfo;

    dispatch(setCardsetTitle(name));
    dispatch(setDueDateTime(dueDate));
  };
}

export function initializeCardsetPage(id) {
  return async (dispatch) => {
    await dispatch(loadRootCardsets());
    await dispatch(loadCardsetInfo(id));
    await dispatch(loadCardsetChildren(id));
  };
}

export function initializeLearnPage(id) {
  return async (dispatch) => {
    dispatch(setIsLastPage(false));
    dispatch(setFlipped(false));
    dispatch(setCards([]));
    await dispatch(loadCardsetInfo(id));
    await dispatch(loadLearnCardsInSequence(id));
  };
}

export function deleteClickedCardset(cardsetId) {
  return async (dispatch) => {
    await deleteCardset(cardsetId);
    dispatch(loadRootCardsets());
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
