import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import LearnCardsContainer from '../containers/LearnCardsContainer';

import {
  initializeLearnPage,
} from '../actions';

export default function LearnPage({ params }) {
  const { id } = params || useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeLearnPage(id));
  }, [id]);

  return (
    <LearnCardsContainer />
  );
}
