import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import CardsetContainer from '../containers/CardsetContainer';

import {
  initializeCardsetPage,
} from '../actions';

export default function CardsetPage({ params }) {
  const dispatch = useDispatch();

  const { id } = params || useParams();

  useEffect(() => {
    console.log('useEffect cardset Page');
    dispatch(initializeCardsetPage(id));
  }, [id]);

  return (
    <div>
      <CardsetContainer id={id} />
    </div>
  );
}
