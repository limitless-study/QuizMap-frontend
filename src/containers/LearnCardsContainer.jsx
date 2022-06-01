import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import Card from '../components/learn/Card';
import CardButtons from '../components/learn/CardButtons';
import NoMoreCards from '../components/learn/NoMoreCards';
import CardsetPath from '../components/learn/CardsetPath';
import Notes from '../components/learn/Notes';
import LearningSidebar from '../components/learn/LearningSidebar';
import Loading from '../components/common/Loading';

import { get } from '../utils';

import {
  flipCard,
  clickWrongCard,
  clickCorrectCard,
  changeStarCount,
  setNotesHidden,
  setNotes,
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
  display: 'flex',
  width: '100vw',
  height: '90vh',
  position: 'relative',
  justifyContent: 'right',
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
  const isNotesHidden = useSelector(get('isNotesHidden'));
  const notes = useSelector(get('notes'));

  if (isLastPage) {
    return (
      <NoMoreCards id={id} />
    );
  }

  if (cards.length === 0) {
    return (
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      >
        <Loading
          size={80}
        />
      </div>
    );
  }

  const {
    id: cardId, topic, answer, path, starCount,
  } = cards[0];

  const handleFlip = () => {
    dispatch(flipCard());
  };

  const handleClickWrong = () => {
    dispatch(setNotes(''));
    dispatch(clickWrongCard(cardId));
  };

  const handleClickCorrect = () => {
    dispatch(setNotes(''));
    dispatch(clickCorrectCard(cardId));
  };

  const handleChangeStarCount = (changedStarCount) => {
    dispatch(changeStarCount({ id: cardId, starCount: changedStarCount }));
  };

  const handleClickSideBarButton = () => {
    dispatch(setNotesHidden(!isNotesHidden));
  };

  const handleChangeNotes = (e) => {
    const { value } = e.target;
    dispatch(setNotes(value));
  };

  return (
    <div style={{ height: '100vh' }}>
      <Header>
        <CardsetPath path={path} />
        <div>
          <FinishButton
            type="button"
          >
            <Link to={`/cardsets/${id}`}>Finish</Link>
          </FinishButton>
        </div>
      </Header>
      <div style={{ display: 'flex' }}>
        <CardItemsContainer>
          <CardItemsWrapper>
            <Card
              id={id}
              flipped={flipped}
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
          <Notes
            notes={notes}
            isNotesHidden={isNotesHidden}
            onChange={handleChangeNotes}
          />
        </CardItemsContainer>
        <LearningSidebar
          isNotesHidden={isNotesHidden}
          onClick={handleClickSideBarButton}
        />
      </div>
    </div>
  );
}
