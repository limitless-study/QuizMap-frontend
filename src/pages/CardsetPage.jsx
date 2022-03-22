import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import CardsetContainer from '../containers/CardsetContainer';

import {
  initializeCardsetPage,
} from '../actions';

export default function CardsetPage({ params }) {
  const dispatch = useDispatch();

  const { id } = params || useParams();

  dispatch(initializeCardsetPage(id));

  return (
    <div>
      <CardsetContainer id={id} />
    </div>
  );
}
