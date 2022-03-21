import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { get } from '../utils';

export default function RootContainer() {
  const root = useSelector(get('root'));

  return (
    <div>
      <h1>
        My Cardsets
      </h1>
      <div>
        {root.map((cardset) => (
          <Link to={`/cardsets/${cardset.id}`}>
            {cardset.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
