const cardsetState = {
  currentCardId: 1, // 현재 편집중인 card id
  newCardId: 1, // 새롭게 추가할 card id
  cardset: {
    id: 1,
    title: '',
    cards: [
      {
        id: 1,
        question: '',
        answer: '',
      },
    ],
  },
};

const initialState = {
  cardsets: [],
  cardIndex: 0,
  flipped: false,
  ...cardsetState,
};

const reducers = {
  setFlipped(state, { payload: { flipped } }) {
    return {
      ...state,
      flipped,
    };
  },

  setCardIndex(state, { payload: { cardIndex } }) {
    return {
      ...state,
      cardIndex,
    };
  },

  changeCardsetTitle(state, { payload: { name, value } }) {
    return {
      ...state,
      cardset: {
        ...state.cardset,
        [name]: value,
      },
    };
  },

  changeCreateFields(state, { payload: { name, value } }) {
    return {
      ...state,
      createFields: {
        ...state.createFields,
        [name]: value,
      },
    };
  },

  makeCard(state, { payload: { id, question, answer } }) {
    return {
      ...state,
      cardset: {
        ...state.cardset,
        cards: [...state.cardset.cards, { id, question, answer }],
      },
    };
  },

  setNewCardId(state, { payload: { newCardId } }) {
    return {
      ...state,
      newCardId,
    };
  },

  setCurrentCardId(state, { payload: { currentCardId } }) {
    return {
      ...state,
      currentCardId,
    };
  },

  updateCard(state, { payload: { currentCardId, name, value } }) {
    return {
      ...state,
      cardset: {
        ...state.cardset,
        cards: [
          ...(state.cardset.cards.map((card) => (card.id === currentCardId
            ? { ...card, [name]: value }
            : card))),
        ],
      },
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
