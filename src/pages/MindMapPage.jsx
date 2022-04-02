import { useLayoutEffect } from 'react';

import { useParams, Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { CgArrowLeftO } from 'react-icons/cg';

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

const BackButton = styled.div({
  position: 'fixed',
  zIndex: '100',
  right: '0',
  height: '35px',
  lineHeight: '35px',
  backgroundColor: 'white',
  padding: '0 8px',
  margin: '20px',
  borderRadius: '5px',
  boxShadow: '0 1px 2px 0 rgb(0 0 0 / 20%)',
  textAlign: 'center',
  fontSize: '13px',
  '& a': {
    display: 'inline-block',
    '.icon': {
      verticalAlign: 'middle',
    },
  },
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
      <BackButton>
        <Link to={`/cardsets/${id}`}>
          <CgArrowLeftO className="icon" />
          {' '}
          Back to Flashcard
        </Link>
      </BackButton>
      <MindMap mindMapCards={mindMapCards} />
    </Wrapper>
  );
}
