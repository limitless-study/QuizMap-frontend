import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

const Cardset = styled.div({
  width: '100%',
  height: '100%',
  backgroundColor: '#F3F3F3',
  borderRadius: '10px',
  border: '1px solid #E7E7E7',
  boxShadow: 'rgba(0, 0, 0, 0.09) 0px 3px 12px',
  transition: 'border 0.5s',
  display: 'flex',
  '& a': {
    width: '100%',
    padding: '30px 15px',
    display: 'block',
    color: '#303030',
    fontSize: '20px',
    fontWeight: 'bolder',
  },
  ':hover': {
    cursor: 'pointer',
    border: '2px solid #2F38FF',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 10px',
  },
});

export default function RootCard({ cardset }) {
  return (
    <Cardset>
      <Link to={`/cardsets/${cardset.id}`}>
        {cardset.topic}
      </Link>
    </Cardset>
  );
}
