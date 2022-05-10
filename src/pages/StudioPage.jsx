import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import StudioContainer from '../containers/StudioContainer';

import {
  initializeCardsetStudio,
} from '../actions';

export default function StudioPage({ params }) {
  const dispatch = useDispatch();

  const { id } = params || useParams();

  useEffect(() => {
    dispatch(initializeCardsetStudio(id));
  });

  return (
    <StudioContainer id={id} />
  );
}
