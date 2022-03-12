import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import Card from '../components/Card';
import CardButtons from '../components/CardButtons';

import {
  initializeCard,
  flipCard,
  nextCard,
} from '../actions';

import { get } from '../utils';

const CardItemsContainer = styled.div({
  width: '100vw',
  height: '90vh',
  position: 'relative',
});

const CardItemsWrapper = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

export default function CardsContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeCard());
  }, []);

  const cards = useSelector(get('cards'));
  const cardIndex = useSelector(get('cardIndex'));
  const flipped = useSelector(get('flipped'));
  const card = cards[cardIndex];

  const handleFlip = () => {
    dispatch(flipCard());
  };

  const handleClick = () => {
    dispatch(nextCard(cardIndex));
  };

  return (
    <CardItemsContainer>
      <CardItemsWrapper>
        <Card
          content={flipped ? card.answer : card.question}
        />
        <CardButtons
          onFlip={handleFlip}
          onClick={handleClick}
        />
      </CardItemsWrapper>
    </CardItemsContainer>
  );
}
