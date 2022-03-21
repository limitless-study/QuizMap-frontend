import styled from '@emotion/styled';

import SideMenuBar from '../components/SideMenuBar';
import CardsetContainer from '../containers/CardsetContainer';

const Wrapper = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
});

export default function CardsetsPage() {
  return (
    <Wrapper>
      <SideMenuBar />
      <CardsetContainer />
    </Wrapper>
  );
}
