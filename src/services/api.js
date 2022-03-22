import cardsetInfo from '../fixtures/cardsetInfo';
import cardsetChildren from '../fixtures/cardsetChildren';
import rootCardsetChildren from '../fixtures/rootCardsetChildren';

export function fetchCardsetInfo(cardsetId) {
  // TODO: 임의의 cardsetInfo로 대체
  const info = cardsetInfo[cardsetId];
  return info;
}

export function fetchCardsetChildren(cardsetId) {
  // TODO: 임의의 cardsetChildren로 대체
  if (cardsetId === 0) {
    return rootCardsetChildren;
  }
  return cardsetChildren[cardsetId].children;
}

export function fetchCardsetCards(id) {
  return [
    {
      id: 1,
      question: '1+1?',
      answer: '2',
    },
    {
      id: 14,
      question: '2+2?',
      answer: '4',
    },
  ];
}
