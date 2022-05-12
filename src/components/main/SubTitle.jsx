import styled from '@emotion/styled';

const Title = styled.div({
  width: '92%',
  borderBottom: '1px solid lightgray',
  fontWeight: 'bolder',
  fontSize: '28px',
  color: '#686868',
});

export default function SubTitle({ text }) {
  return (
    <Title>{text}</Title>
  );
}
