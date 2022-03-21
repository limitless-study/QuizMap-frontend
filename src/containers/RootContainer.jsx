import { Link } from 'react-router-dom';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadCardsetChildren,
} from '../actions';

import { get } from '../utils';

export default function RootContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCardsetChildren(0));
  });

  const root = useSelector(get('cardsetChildren'));

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
              ,
              {cardset.id}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
