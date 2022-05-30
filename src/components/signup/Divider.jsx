import styled from '@emotion/styled';

const Line = styled.div({
  flex: '1',
  height: '10px',
  margin: '0 10px',
  borderBottom: '1px solid #bcd4e6',
});

export default function Divider() {
  return (
    <div style={{
      display: 'flex', width: '420px ', color: '#bcd4e6', fontSize: '15px', margin: '15px',
    }}
    >
      <Line />
      OR
      <Line />
    </div>
  );
}
