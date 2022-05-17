import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import Card from '../components/learn/Card';
import CardButtons from '../components/learn/CardButtons';
import NoMoreCards from '../components/learn/NoMoreCards';
import CardsetPath from '../components/learn/CardsetPath';

import { get } from '../utils';

import {
  flipCard,
  clickWrongCard,
  clickCorrectCard,
  changeStarCount,
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

export default function LearnCardsContainer({ id }) {
  const dispatch = useDispatch();

  const cards = useSelector(get('cards'));
  const flipped = useSelector(get('flipped'));
  const isLastPage = useSelector(get('isLastPage'));

  if (isLastPage) {
    return (
      <NoMoreCards id={id} />
    );
  }

  if (cards.length === 0) {
    return (
      <div>Loading...</div>
    );
  }

  const {
    id: cardId, topic, answer, path, starCount,
  } = cards[0];

  const handleFlip = () => {
    dispatch(flipCard());
  };

  const handleClickWrong = () => {
    dispatch(clickWrongCard(cardId));
  };

  const handleClickCorrect = () => {
    dispatch(clickCorrectCard(cardId));
  };

  const handleChangeStarCount = (changedStarCount) => {
    dispatch(changeStarCount({ id: cardId, starCount: changedStarCount }));
  };

  return (
    <div>
      <Header>
        <CardsetPath path={path} />
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
            content={flipped ? answer : topic}
            starCount={starCount}
            onChangeStarCount={handleChangeStarCount}
          />
          <CardButtons
            onFlip={handleFlip}
            onClickWrong={handleClickWrong}
            onClickCorrect={handleClickCorrect}
          />
        </CardItemsWrapper>
      </CardItemsContainer>
    </div>
  );
}
