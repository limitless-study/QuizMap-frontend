import styled from '@emotion/styled';

import Milkdown from './Milkdown';

const CardBoxField = styled.li({
  border: '1.5px solid #F1F1F1',
  width: '210px',
  height: '150px',
  fontWeight: 'bold',
  backgroundColor: 'transparent',
  padding: '10px',
  borderRadius: '5px',
  display: 'inline-block',
  justifyContent: 'space-between',
  overflow: 'auto',
  '::-webkit-scrollbar': {
    width: '13px',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: '#f1f1f1',
    borderRadius: '10px',
    backgroundClip: 'padding-box',
    border: '3px solid transparent',
  },
  '::-webkit-scrollbar-track': {
    backgroundColor: 'none',
  },
});

export default function CardBox({ card }) {
  const { id, topic } = card;

  return (
    <CardBoxField>
      <Milkdown
        id={id}
        content={topic}
      />
    </CardBoxField>
  );
}
