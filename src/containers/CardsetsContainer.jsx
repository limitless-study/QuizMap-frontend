import { useSelector } from 'react-redux';

import Cardsets from '../components/Cardsets';

import { get } from '../utils';

export default function CardsetsContainer() {
  const cardsets = useSelector(get('cardsets'));

  return (
    <Cardsets cardsets={cardsets} />
  );
}
