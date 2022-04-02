import styled from '@emotion/styled';

import CardsetContainer from '../containers/CardsetContainer';

const Wrapper = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
});

export default function CardsetsPage() {
  return (
    <Wrapper>
      <CardsetContainer />
    </Wrapper>
  );
}
