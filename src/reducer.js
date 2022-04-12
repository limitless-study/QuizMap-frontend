const initialState = {
  // cardsets page
  cardsets: [],
  cardsetInfo: {},
  rootCardsets: [],
  cardsetChildren: [],
  isViewMoreHidden: true,
  clickedCardsetId: null,
  clickedCardId: null,

  // studio page
  cards: [],
  cardsetTitle: '',
  newCardIndex: 1,
  currentCardIndex: 1,
  isTitleChanged: false,
  cardsetId: 0,

  // learn page
  isLastPage: false,
  flipped: false,

  // mind map page
  mindMapCards: [],
};

const reducers = {
  setFlipped(state, { payload: { flipped } }) {
    return {
      ...state,
      flipped,
    };
  },

  setCardsetId(state, { payload: { cardsetId } }) {
    return {
      ...state,
      cardsetId,
    };
  },

  setCardsetTitle(state, { payload: { cardsetTitle } }) {
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
      id, cardIndex, question, answer, cardChanged, cardAdded,
    },
  }) {
    return {
      ...state,
      cards: [...state.cards, {
        id, cardIndex, question, answer, cardChanged, cardAdded,
      }],
    };
  },

  setViewMoreButton(state, { payload: { isViewMoreHidden } }) {
    return {
      ...state,
      isViewMoreHidden,
    };
  },

  setClickedCardsetId(state, { payload: { clickedCardsetId } }) {
    return {
      ...state,
      clickedCardsetId,
    };
  },

  setClickedCardId(state, { payload: { clickedCardId } }) {
    return {
      ...state,
      clickedCardId,
    };
  },

  // studio state
  setTitleChanged(state, { payload: { isTitleChanged } }) {
    return {
      ...state,
      isTitleChanged,
    };
  },

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

  updateCard(state, {
    payload: {
      currentCardIndex, name, value, cardChanged,
    },
  }) {
    return {
      ...state,
      cards: [
        ...(state.cards.map((card) => (card.cardIndex === currentCardIndex
          ? {
            ...card,
            [name]: value,
            cardChanged,
          }
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

  setIsLastPage(state, { payload: { isLastPage } }) {
    return {
      ...state,
      isLastPage,
    };
  },

  setMindMapCards(state, { payload: { mindMapCards } }) {
    return {
      ...state,
      mindMapCards,
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
