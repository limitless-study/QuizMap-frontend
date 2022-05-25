const initialState = {
  // cardsets page
  cardsets: [],
  cardsetInfo: {},
  rootCardsets: [],
  cardsetChildren: [],
  clickedCardsetId: null,
  clickedCardIndex: null,

  // studio page
  cards: [],
  cardsetTitle: '',
  dueDateTime: '',
  newCardIndex: 1,
  currentCardIndex: 1,
  isTitleChanged: false,
  isDueDateTimeChanged: false,
  cardsetId: 0,

  // learn page
  isLastPage: false,
  flipped: false,
  isNotesHidden: true,
  notes: '',

  // mind map page
  mindMapCards: [],

  // sign-up page
  signup: {
    email: '',
    name: '',
    password: '',
  },

  // login page
  TOKEN: null,
  login: {
    email: '',
    password: '',
  },
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

  setDueDateTime(state, { payload: { dueDateTime } }) {
    return {
      ...state,
      dueDateTime,
    };
  },

  makeCard(state, {
    payload: {
      id, cardIndex, topic, answer, cardChanged, cardAdded, cardDeleted,
    },
  }) {
    return {
      ...state,
      cards: [...state.cards, {
        id, cardIndex, topic, answer, cardChanged, cardAdded, cardDeleted,
      }],
    };
  },

  setClickedCardsetId(state, { payload: { clickedCardsetId } }) {
    return {
      ...state,
      clickedCardsetId,
    };
  },

  setClickedCardIndex(state, { payload: { clickedCardIndex } }) {
    return {
      ...state,
      clickedCardIndex,
    };
  },

  // studio state
  setTitleChanged(state, { payload: { isTitleChanged } }) {
    return {
      ...state,
      isTitleChanged,
    };
  },

  setDueDateTimeChanged(state, { payload: { isDueDateTimeChanged } }) {
    return {
      ...state,
      isDueDateTimeChanged,
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

  setNotesHidden(state, { payload: { isNotesHidden } }) {
    return {
      ...state,
      isNotesHidden,
    };
  },

  setNotes(state, { payload: { notes } }) {
    return {
      ...state,
      notes,
    };
  },

  // sign-up
  setSignUpField(state, { payload: { key, value } }) {
    return {
      ...state,
      signup: {
        ...state.signup,
        [key]: value,
      },
    };
  },

  setLoginField(state, { payload: { key, value } }) {
    return {
      ...state,
      login: {
        ...state.login,
        [key]: value,
      },
    };
  },

  setToken(state, { payload: { TOKEN } }) {
    return {
      ...state,
      TOKEN,
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
