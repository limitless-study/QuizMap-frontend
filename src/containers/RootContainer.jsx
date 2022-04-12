import { useNavigate } from 'react-router-dom';

import { useLayoutEffect } from 'react';

import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';

import { get } from '../utils';

import SideMenuBar from '../components/SideMenuBar';
import RootCard from '../components/RootCard';
import ViewMoreButtons from '../components/ViewMoreButtons';
import AddCardsetButton from '../components/AddCardsetButton';

import {
  addNewCardset,
  expandViewMoreButton,
  contractViewMoreButton,
  deleteClickedCardset,
} from '../actions';

const Title = styled.div({
  width: '100%',
  marginBottom: '15px',
  borderBottom: '1px solid lightgray',
  fontWeight: 'bolder',
  fontSize: '28px',
  color: '#686868',
});

export default function RootContainer() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const rootCardsets = useSelector(get('rootCardsets'));
  const cardsetId = useSelector(get('cardsetId'));
  const isViewMoreHidden = useSelector(get('isViewMoreHidden'));
  const clickedCardsetId = useSelector(get('clickedCardsetId'));

  useLayoutEffect(() => {
    navigate(`/studio/${cardsetId}`);
  }, [cardsetId]);

  const handleAddNewCardset = () => {
    dispatch(addNewCardset(1));
  };

  const handleClickViewMoreButton = (id) => {
    dispatch(expandViewMoreButton(id));
  };

  const handleClickOutside = () => {
    dispatch(contractViewMoreButton());
  };

  const handleClickDeleteCardsetButton = (id) => {
    dispatch(deleteClickedCardset(id));
  };

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex' }}>
      <SideMenuBar
        menus={[]}
      />
      <div style={{ padding: '30px', width: '100%' }}>
        <Title>
          Cardsets
        </Title>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
          {rootCardsets.map((cardset) => {
            if (cardset.id === clickedCardsetId) {
              return (
                <div style={{ display: 'flex' }}>
                  <RootCard
                    key={cardset.id}
                    cardset={cardset}
                  />
                  <ViewMoreButtons
                    id={cardset.id}
                    isViewMoreHidden={isViewMoreHidden}
                    handleClickOutside={handleClickOutside}
                    handleClickViewMoreButton={handleClickViewMoreButton}
                    handleClickDeleteCardsetButton={handleClickDeleteCardsetButton}
                  />
                </div>
              );
            }
            return (
              <div style={{ display: 'flex' }}>
                <RootCard
                  key={cardset.id}
                  cardset={cardset}
                />
                <ViewMoreButtons
                  id={cardset.id}
                  isViewMoreHidden
                  handleClickOutside={handleClickOutside}
                  handleClickViewMoreButton={handleClickViewMoreButton}
                  handleClickDeleteCardsetButton={handleClickDeleteCardsetButton}
                />
              </div>
            );
          })}
          <AddCardsetButton
            handleClick={handleAddNewCardset}
          />
        </div>
      </div>
    </div>
  );
}
