import styled from '@emotion/styled';

const CardBox = styled.div({
  width: '300px',
  height: '240px',
  border: '1px solid lightgray',
  lineHeight: '240px',
  textAlign: 'center',
});

export default function Card({ content }) {
  return (
    <CardBox>
      {content}
    </CardBox>
  );
}
