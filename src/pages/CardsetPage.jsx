import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import CardsetContainer from '../containers/CardsetContainer';

import {
  loadCardsetInfo,
  loadCardsetChildren,
  loadRootCardsets,
} from '../actions';

export default function CardsetPage({ params }) {
  const dispatch = useDispatch();

  const { id } = params || useParams();

  useEffect(() => {
    dispatch(loadRootCardsets());
    dispatch(loadCardsetInfo(id));
    dispatch(loadCardsetChildren(id));
  }, [id]);

  return (
    <div>
      <CardsetContainer id={id} />
    </div>
  );
}
