import { useParams, useEffect } from 'react-router-dom';

import LearnCardsContainer from '../containers/LearnCardsContainer';

import {
  initializeLearnPage,
} from '../actions';

export default function LearnPage({ params }) {
  const { id } = params || useParams();

  useEffect(() => {
    dispatchEvent(initializeLearnPage(id));
  }, [id]);

  return (
    <LearnCardsContainer />
  );
}
