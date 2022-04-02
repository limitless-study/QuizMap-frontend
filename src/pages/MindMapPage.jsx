import { useLayoutEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import SideMenuBar from '../components/SideMenuBar';
import MindMap from '../components/MindMap';

import {
  loadMindMapCards,
  loadRootCardsets,
} from '../actions';

import { get } from '../utils';

const Wrapper = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
});

export default function MindMapPage({ params }) {
  const { id } = params || useParams();

  const dispatch = useDispatch();

  const menus = useSelector(get('rootCardsets'));
  const mindMapCards = useSelector(get('mindMapCards'));

  useLayoutEffect(() => {
    dispatch(loadRootCardsets());
    dispatch(loadMindMapCards(id));
  }, [id]);

  return (
    <Wrapper>
      <SideMenuBar menus={menus} />
      <MindMap mindMapCards={mindMapCards} />
    </Wrapper>
  );
}
