import { useNavigate } from 'react-router-dom';

import { useLayoutEffect } from 'react';

import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';

import { BsPlusCircleDotted } from 'react-icons/bs';

import { get } from '../utils';

import SideMenuBar from '../components/SideMenuBar';
import RootCard from '../components/RootCard';

import {
  addNewCardset,
  expandViewMoreButton,
  contractViewMoreButton,
  deleteClickedCardset,
} from '../actions';

const Wrapper = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
});

const Title = styled.div({
  width: '100%',
  marginBottom: '15px',
  borderBottom: '1px solid lightgray',
  fontWeight: 'bolder',
  fontSize: '28px',
  color: '#686868',
});

const Container = styled.div({
  padding: '30px',
  width: '100%',
});

const CardsetsContainer = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '15px',
});

const AddCardsetButton = styled.button({
  backgroundColor: 'white',
  width: '260px',
  height: '200px',
  textAlign: 'center',
  lineHeight: '180px',
  borderRadius: '10px',
  border: '1px solid #E7E7E7',
  boxShadow: 'rgba(0, 0, 0, 0.09) 0px 3px 12px',
  cursor: 'pointer',
  transition: 'background-color 0.5s',
  ':hover': {
    backgroundColor: 'gray',
    color: 'white',
  },
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
    <Wrapper>
      <SideMenuBar
        menus={[]}
      />
      <Container>
        <Title>
          Cardsets
        </Title>
        <CardsetsContainer>
          {rootCardsets.map((cardset) => {
            if (cardset.id === clickedCardsetId) {
              return (
                <RootCard
                  key={cardset.id}
                  cardset={cardset}
                  isViewMoreHidden={isViewMoreHidden}
                  handleClickOutside={handleClickOutside}
                  handleClickViewMoreButton={handleClickViewMoreButton}
                  handleClickDeleteCardsetButton={handleClickDeleteCardsetButton}
                />
              );
            }
            return (
              <RootCard
                key={cardset.id}
                cardset={cardset}
                isViewMoreHidden
                handleClickOutside={handleClickOutside}
                handleClickViewMoreButton={handleClickViewMoreButton}
                handleClickDeleteCardsetButton={handleClickDeleteCardsetButton}
              />
            );
          })}
          <AddCardsetButton
            type="button"
            onClick={handleAddNewCardset}
          >
            <BsPlusCircleDotted size={30} />
          </AddCardsetButton>
        </CardsetsContainer>
      </Container>
    </Wrapper>
  );
}
