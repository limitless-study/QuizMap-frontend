import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { get } from '../utils';

export default function RootContainer() {
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
