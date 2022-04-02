import { Link, useNavigate } from 'react-router-dom';

import { useLayoutEffect } from 'react';

import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';

import { BsPlusCircleDotted } from 'react-icons/bs';

import { get } from '../utils';

import SideMenuBar from '../components/SideMenuBar';

import {
  addNewCardset,
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

const CardsetCard = styled.div({
  display: 'table',
  backgroundColor: '#F3F3F3',
  width: '220px',
  height: '160px',
  padding: '20px',
  textAlign: 'left',
  borderRadius: '10px',
  border: '1px solid #E7E7E7',
  boxShadow: 'rgba(0, 0, 0, 0.09) 0px 3px 12px',
  transition: 'border 0.5s',
  '& a': {
    height: '160px',
    display: 'block',
    color: '#303030',
    fontSize: '20px',
    fontWeight: 'bolder',
    verticalAlign: 'middle',
  },
  ':hover': {
    border: '2px solid #2F38FF',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 10px',
  },
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

  useLayoutEffect(() => {
    navigate(`/studio/${cardsetId}`);
  }, [cardsetId]);

  const handleAddNewCardset = () => {
    dispatch(addNewCardset(1));
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
          {rootCardsets.map((cardset) => (
            <CardsetCard
              key={cardset.id}
            >
              <Link to={`/cardsets/${cardset.id}`}>
                {cardset.title}
              </Link>
            </CardsetCard>
          ))}
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
