import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import Card from '../components/Card';
import CardButtons from '../components/CardButtons';
import LastLearningPage from '../components/LastLearningPage';

import { get } from '../utils';

import {
  flipCard,
  nextCard,
  saveCardScore,
} from '../actions';

const Header = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px',
  fontSize: '24px',
  fontWeight: 'bolder',
  borderBottom: '1px solid #DDDDDD',
});

const FinishButton = styled.button({
  backgroundColor: '#5B40FF',
  width: '100px',
  height: '40px',
  borderRadius: '6px',
  border: 'none',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#3716FF',
  },
  '& a': {
    display: 'block',
    color: 'white',
    fontSize: '14px',
    fontWeight: 'bolder',
  },
});

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
  const { id, name } = useSelector(get('cardsetInfo'));
  const isLastPage = useSelector(get('isLastPage'));

  if (isLastPage) { // ! 지우기
    return (
      <LastLearningPage id={id} />
    );
  }

  if (cards.length === 0) {
    return (
      <div>Loading...</div>
    );
  }

  const currentCard = cards.filter((card) => card.cardIndex === currentCardIndex);
  const { id: cardId, question, answer } = currentCard[0];

  const handleFlip = () => {
    dispatch(flipCard());
  };

  const handleClick = (feedbackNumber) => {
    dispatch(saveCardScore(cardId, feedbackNumber));
    dispatch(nextCard(currentCardIndex));
  };

  return (
    <div>
      <Header>
        <div>{name}</div>
        <div>
          <FinishButton
            type="button"
          >
            <Link to={`/cardsets/${id}`}>끝내기</Link>
          </FinishButton>
        </div>
      </Header>
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
    </div>
  );
}