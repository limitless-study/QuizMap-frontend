import cardsetInfo from '../fixtures/cardsetInfo';
import cardsetChildren from '../fixtures/cardsetChildren';
import rootCardsetChildren from '../fixtures/rootCardsetChildren';
import cardsetCards from '../fixtures/cardsetCards';

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
  return cardsetCards[id].children;
}
