import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import CreateContainer from '../containers/CreateContainer';

import {
  initializeCardsetStudio,
} from '../actions';

export default function CreatePage({ params }) {
  const dispatch = useDispatch();

  const { id } = params || useParams();

  useEffect(() => {
    dispatch(initializeCardsetStudio(id));
  }, [id]);

  return (
    <CreateContainer id={id} />
  );
}
