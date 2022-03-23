const initialState = {
  // cardset 보기 page state
  cardsets: [],
  cardsetInfo: {},
  rootCardsets: [],
  cardsetChildren: [],

  // studio cardsetState
  cards: [],
  cardsetTitle: '',
  newCardIndex: 1,
  currentCardIndex: 1,

  // 학습 mode
  cardIndex: 0,
  flipped: false,
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

  changeCardsetTitle(state, { payload: { cardsetTitle } }) {
    return {
      ...state,
      cardsetTitle,
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

  makeCard(state, {
    payload: {
      id, cardIndex, question, answer,
    },
  }) {
    return {
      ...state,
      cards: [...state.cards, {
        id, cardIndex, question, answer,
      }],
    };
  },

  addNewCardset(state, { payload: { cardset } }) {
    return {
      ...state,
      cardsets: [...state.cardsets, cardset],
    };
  },

  // studio state
  setNewCardIndex(state, { payload: { newCardIndex } }) {
    return {
      ...state,
      newCardIndex,
    };
  },

  setCurrentCardIndex(state, { payload: { currentCardIndex } }) {
    return {
      ...state,
      currentCardIndex,
    };
  },

  updateCard(state, { payload: { currentCardIndex, name, value } }) {
    return {
      ...state,
      cards: [
        ...(state.cards.map((card) => (card.cardIndex === currentCardIndex
          ? { ...card, [name]: value }
          : card))),
      ],
    };
  },

  setCardsetInfo(state, { payload: { cardsetInfo } }) {
    return {
      ...state,
      cardsetInfo,
    };
  },

  setCardsetChildren(state, { payload: { cardsetChildren } }) {
    return {
      ...state,
      cardsetChildren,
    };
  },

  setRootCardsets(state, { payload: { rootCardsets } }) {
    return {
      ...state,
      rootCardsets,
    };
  },

  setCards(state, { payload: { cards } }) {
    return {
      ...state,
      cards,
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
