import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import { TailSpin } from 'react-loader-spinner';

const CardsetPathContainer = styled.ul({
  display: 'flex',
  marginTop: '5px',
});

const PathItem = styled.li(
  {
    display: 'table-cell',
    verticalAlign: 'middle',
    padding: '0 3px',
    borderRadius: '4px',
    '& a': {
      fontSize: '11px',
    },
    ':hover': {
      backgroundColor: '#F1F1EF',
    },
  },
);

const Slash = styled.span(
  {
    padding: '0 3px',
    color: '#c2c2c2',
    display: 'table-cell',
    verticalAlign: 'middle',
  },
  (props) => ({
    display: props.isLastPath ? 'none' : '',
  }),
);

export default function CardsetPath({ rootCardSetId, cardsetId, path }) {
  if (!path) {
    return (
      <TailSpin
        width="30"
        height="30"
        color="#5658ff"
      />
    );
  }

  return (
    <CardsetPathContainer>
      {path.map((item) => {
        if (item.id === Number(rootCardSetId)) {
          return (
            <div key={item.id} style={{ display: 'table' }}>
              <PathItem>
                <Link to="/root">
                  {item.topic}
                </Link>
              </PathItem>
              <Slash>/</Slash>
            </div>
          );
        }
        return (
          <div key={item.id} style={{ display: 'table' }}>
            <PathItem>
              <Link to={`/cardsets/${item.id}`}>
                {item.topic}
              </Link>
            </PathItem>
            <Slash isLastPath={item.id === Number(cardsetId)}>/</Slash>
          </div>
        );
      })}
    </CardsetPathContainer>
  );
}
