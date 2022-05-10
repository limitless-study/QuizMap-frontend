import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

const CardsetPathContainer = styled.ul({
  display: 'flex',
});

const PathItem = styled.li({
  marginRight: '10px',
  padding: '2px 6px',
  borderRadius: '4px',
  border: '1px solid lightgray',
  '& a': {
    fontWeight: 'bolder',
  },
});

const CurrentPathItem = styled.li({
  marginRight: '10px',
  padding: '2px 6px',
  borderRadius: '4px',
  border: '1px solid gray',
  backgroundColor: 'gray',
  '& a': {
    fontWeight: 'bolder',
    color: 'white',
  },
});

export default function CardsetPath({ cardsetId, path }) {
  if (!path) {
    return <>loading...</>;
  }

  return (
    <CardsetPathContainer>
      {path.map((item) => {
        if (item.id === 1) {
          return (
            <PathItem key={item.id}>
              <Link to="/root">
                {item.topic}
              </Link>
            </PathItem>
          );
        }
        if (item.id === Number(cardsetId)) {
          return (
            <CurrentPathItem key={item.id}>
              <Link to={`/cardsets/${item.id}`}>
                {item.topic}
              </Link>
            </CurrentPathItem>
          );
        }
        return (
          <PathItem key={item.id}>
            <Link to={`/cardsets/${item.id}`}>
              {item.topic}
            </Link>
          </PathItem>
        );
      })}
    </CardsetPathContainer>
  );
}
