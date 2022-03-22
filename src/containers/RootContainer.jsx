import { Link } from 'react-router-dom';

import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { get } from '../utils';

export default function RootContainer() {
  const root = useSelector(get('rootCardsets'));

  console.log('root:', root);

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
