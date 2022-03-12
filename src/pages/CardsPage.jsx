import { useParams } from 'react-router-dom';

import CardsContainer from '../containers/CardsContainer';

export default function CardsPage({ params }) {
  console.log('CardsPage');

  const { id } = params || useParams();

  return (
    <CardsContainer cardsetId={id} />
  );
}
