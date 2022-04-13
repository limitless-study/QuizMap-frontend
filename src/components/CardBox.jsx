import { BsCheckLg } from 'react-icons/bs';

import styled from '@emotion/styled';

const CardBoxField = styled.li({
  width: '97%',
  fontWeight: 'bold',
  backgroundColor: 'transparent',
  padding: '15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid #F1F1F1',
  transition: 'background-color 0.3s',
});

const IconBox = styled.button({
  width: '28px',
  height: '28px',
  fontSize: '15px',
  backgroundColor: '#D4D4D4',
  borderRadius: '2px',
  border: 'none',
  color: 'white',
  marginRight: '5px',
  '& a': {
    display: 'block',
    fontWeight: 'bold',
    border: 'none',
    color: 'white',
    textAlign: 'center',
  },
});

export default function CardBox({ card }) {
  const { id, topic } = card;

  return (
    <CardBoxField
      key={id}
    >
      <div>
        <IconBox>
          <BsCheckLg />
        </IconBox>
        {topic}
      </div>
    </CardBoxField>
  );
}
