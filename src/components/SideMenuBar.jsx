import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

const Wrapper = styled.div({
  padding: '10px',
  backgroundColor: '#EDEDED',
  '& a': {
    fontSize: '30px',
    color: 'white',
  },
});

export default function SideMenuBar() {
  return (
    <Wrapper>
      <h1>
        <Link to="/">Limitless</Link>
      </h1>
    </Wrapper>
  );
}
