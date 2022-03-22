import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import CreateContainer from '../containers/CreateContainer';

import {
  loadCards,
  loadCardsetInfo,
} from '../actions';

import { get } from '../utils';

export default function CreatePage({ params }) {
  const { id } = params || useParams();

  return (
    <div>
      <CreateContainer id={id} />
    </div>
  );
}
