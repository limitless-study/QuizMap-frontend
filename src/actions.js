import {
  fetchCardsetInfo,
  fetchCardsetChildren,
  fetchCardsetCards,
  fetchLearnCardsInSequence,
  fetchMindMapCards,
  patchCardsetTitle,
  postNewCard,
  patchCardsetCard,
  postNewCardset,
  postCardFeedbackNumber,
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

export function initializeCard() {
  return (dispatch) => {
    dispatch(setFlipped(false));
    dispatch(setCurrentCardIndex(1));
    dispatch(setNewCardIndex(1));
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

export function nextCard(cardIndex) {
  return (dispatch, getState) => {
    const { cards } = getState();

    if (cardIndex + 1 <= cards.length) {
      dispatch(setCurrentCardIndex(cardIndex + 1));
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

export function setCardsetTitle(cardsetTitle) {
  return {
    type: 'setCardsetTitle',
    payload: { cardsetTitle },
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
  id, cardIndex, question, answer, cardChanged, cardAdded,
}) {
  return {
    type: 'makeCard',
    payload: {
      id, cardIndex, question, answer, cardChanged, cardAdded,
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
    const { isTitleChanged } = getState();

    if (isTitleChanged) {
      const { cardsetTitle } = getState();
      patchCardsetTitle({ id: cardsetId, name: cardsetTitle });
    }

    const { cards } = getState();

    cards.forEach((card) => {
      if (card.cardAdded) {
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

export function loadRootCardsets() {
  return async (dispatch) => {
    const root = await fetchCardsetChildren(1);
    const rootCardsets = root.filter((cardset) => cardset.type === 'CARDSET');
    dispatch(setRootCardsets(rootCardsets));
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
        cardChanged: false,
        cardAdded: true,
      }));
      dispatch(setNewCardIndex(newCardIndex + 1));
    } else {
      const cards = cardsetCards.map((card) => {
        const { newCardIndex } = getState();
        Object.assign(card, { cardIndex: newCardIndex });
        Object.assign(card, { cardChanged: false });
        Object.assign(card, { cardAdded: false });
        dispatch(setNewCardIndex(newCardIndex + 1));
        return card;
      });
      dispatch(setCards(cards));
    }
  };
}

export function loadLearnCardsInSequence(cardsetId) {
  return async (dispatch, getState) => {
    const cards = await fetchLearnCardsInSequence(cardsetId);

    // if no cards
    if (cards.length === 0) {
      dispatch(setIsLastPage(true));
    } else {
      const learnCards = cards.map((card) => {
        const { newCardIndex } = getState();
        Object.assign(card, { cardIndex: newCardIndex });
        dispatch(setNewCardIndex(newCardIndex + 1));
        return card;
      });
      dispatch(setCards(learnCards));
    }
  };
}

export function saveCardScore(cardId, feedbackNumber) {
  return async () => {
    await postCardFeedbackNumber(cardId, feedbackNumber);
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

export function initializeLearnPage(id) {
  return async (dispatch) => {
    dispatch(setIsLastPage(false));
    dispatch(setCards([]));
    dispatch(initializeCard());
    await dispatch(loadCardsetInfo(id));
    await dispatch(loadLearnCardsInSequence(id));
  };
}
