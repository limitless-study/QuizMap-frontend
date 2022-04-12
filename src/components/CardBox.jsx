import { BsCheckLg } from 'react-icons/bs';

import styled from '@emotion/styled';

const CardBoxField = styled.li({
  width: '97%',
  fontWeight: 'bold',
  marginBottom: '10px',
  backgroundColor: '#FAFAFA',
  padding: '5px 0px 5px 5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
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
