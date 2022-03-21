import { useSelector, useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import { useEffect } from 'react';
import Cardset from '../components/Cardset';
import SideMenuBar from '../components/SideMenuBar';

import { get } from '../utils';

import {
  loadCardsetInfo,
  loadCardsetChildren,
  loadRootCardsets,
} from '../actions';

const Wrapper = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
});

export default function CardsetContainer({ id }) {
  const dispatch = useDispatch();

  dispatch(loadCardsetInfo(id));
  dispatch(loadCardsetChildren(id));
  dispatch(loadRootCardsets());

  useEffect(() => {
    dispatch(loadRootCardsets());
    dispatch(loadCardsetInfo(id));
    dispatch(loadCardsetChildren(id));
  }, []);

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
