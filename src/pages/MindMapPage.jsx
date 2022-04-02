import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import MindElixir from 'mind-elixir';

import SideMenuBar from '../components/SideMenuBar';

import {
  loadRootCardsets,
} from '../actions';

import { get } from '../utils';

const Wrapper = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
});

const MindMapField = styled.div({
  width: '82vw',
  height: '100vh',
});

export default function MindMapPage({ params }) {
  const { id } = params || useParams();

  const dispatch = useDispatch();

  const menus = useSelector(get('rootCardsets'));

  useEffect(() => {
    dispatch(loadRootCardsets());
    const mindmap = new MindElixir({
      el: '#map',
      direction: MindElixir.LEFT,
      data: MindElixir.new('new topic'),
      draggable: true, // default true
      contextMenu: true, // default true
      toolBar: true, // default true
      nodeMenu: true, // default true
      keypress: true, // default true
    });
    mindmap.init();
  }, [id]);

  return (
    <Wrapper>
      <SideMenuBar menus={menus} />
      <div>
        <MindMapField id="map" />
      </div>
    </Wrapper>
  );
}
