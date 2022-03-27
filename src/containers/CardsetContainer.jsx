import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import Cardset from '../components/Cardset';
import SideMenuBar from '../components/SideMenuBar';

import { get } from '../utils';

const Wrapper = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
});

export default function CardsetContainer({ id }) {
  console.log('CardsetContainer id:', id);

  const menus = useSelector(get('rootCardsets'));
  const cardsetInfo = useSelector(get('cardsetInfo'));
  const cardsetChildren = useSelector(get('cardsetChildren'));

  return (
    <Wrapper>
      <SideMenuBar
        menus={menus}
      />
      <Cardset
        cardsetInfo={cardsetInfo}
        cardsetChildren={cardsetChildren}
      />
    </Wrapper>
  );
}
