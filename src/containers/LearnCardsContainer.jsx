import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import Card from '../components/Card';
import CardButtons from '../components/CardButtons';

import { get } from '../utils';

import {
  flipCard,
  nextCard,
} from '../actions';

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

export default function LearnCardsContainer() {
  const dispatch = useDispatch();

  const cards = useSelector(get('cards'));
  const flipped = useSelector(get('flipped'));
  const currentCardIndex = useSelector(get('currentCardIndex'));

  if (cards.length === 0) {
    return (
      <div>Loading...</div>
    );
  }

  const currentCard = cards.filter((card) => card.cardIndex === currentCardIndex);
  const { question, answer } = currentCard[0];

  const handleFlip = () => {
    dispatch(flipCard());
  };

  const handleClick = () => {
    dispatch(nextCard(currentCardIndex));
  };

  return (
    <CardItemsContainer>
      <CardItemsWrapper>
        <Card
          content={flipped ? answer : question}
        />
        <CardButtons
          onFlip={handleFlip}
          onClick={handleClick}
        />
      </CardItemsWrapper>
    </CardItemsContainer>
  );
}
