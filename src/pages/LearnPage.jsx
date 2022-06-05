import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import LearnCardsContainer from '../containers/LearnCardsContainer';
import NoMoreCards from '../components/learn/NoMoreCards';

import Loading from '../components/common/Loading';

import {
  initializeLearnPage,
} from '../actions';

import { get } from '../utils';

export default function LearnPage({ params }) {
  const { id } = params || useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeLearnPage(id));
  }, [id]);

  const cards = useSelector(get('cards'));
  const isLastPage = useSelector(get('isLastPage'));

  if (isLastPage) {
    return (
      <NoMoreCards id={id} />
    );
  }

  if (cards.length === 0) {
    return (
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      >
        <Loading
          size={80}
        />
      </div>
    );
  }

  return (
    <LearnCardsContainer id={id} />
  );
}
