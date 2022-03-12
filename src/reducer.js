import cardsets from './fixtures/cardsets';

const initialState = {
  cardsets,
  cardIndex: 0,
  flipped: false,
  cards: [
    { id: 1, question: '사과를 영어로 하면?', answer: 'apple' },
    { id: 2, question: '과일을 영어로 하면?', answer: 'fruit' },
    { id: 3, question: '3 + 3 = ?', answer: '6' },
    { id: 4, question: '1 + 1 = ?', answer: '2' },
  ],
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
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
