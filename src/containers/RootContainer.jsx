import { Link } from 'react-router-dom';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadRootCardsets,
} from '../actions';

import { get } from '../utils';

export default function RootContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRootCardsets(0));
  });

  const root = useSelector(get('rootCardsets'));

  return (
    <div>
      <h1>
        My Cardset
      </h1>
      <div>
        {root.map((cardset) => (
          <div
            key={cardset.id}
          >
            <Link to={`/cardsets/${cardset.id}`}>
              {cardset.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
