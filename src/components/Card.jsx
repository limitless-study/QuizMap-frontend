import styled from '@emotion/styled';

const CardBox = styled.div({
  whiteSpace: 'pre-line',
  display: 'table',
  width: '350px',
  height: '300px',
  border: '1px solid lightgray',
  borderRadius: '10px',
  boxShadow: '0 2px 8px rgb(0 0 0 / 8%)',
  textAlign: 'center',
  padding: '5px',
  '& span': {
    fontSize: '22px',
    display: 'table-cell',
    verticalAlign: 'middle',
  },
});

export default function Card({ content }) {
  return (
    <CardBox>
      <span>{content}</span>
    </CardBox>
  );
}
