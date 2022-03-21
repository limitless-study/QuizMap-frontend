import cardsetInfo from '../fixtures/cardsetInfo';
import rootCardsetChildren from '../fixtures/rootCardsetChildren';

export function fetchCardsetInfo(cardsetId) {
  console.log('fetch cardset info:', cardsetId);

  // TODO: 임의의 cardsetInfo로 대체
  const info = cardsetInfo;
  return info;
}

export function fetchCardsetChildren(cardsetId) {
  console.log('fetch cardset children:', cardsetId);

  // TODO: 임의의 cardsetChildren로 대체
  const children = rootCardsetChildren;
  return children;
}
