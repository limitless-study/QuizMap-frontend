import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { useEffect } from 'react';
import Card from '../components/learn/Card';
import CardButtons from '../components/learn/CardButtons';
import CardsetPath from '../components/learn/CardsetPath';
import Notes from '../components/learn/Notes';
import LearningSidebar from '../components/learn/LearningSidebar';

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

  const accessToken = useSelector(get('accessToken'));
  const cards = useSelector(get('cards'));
  const flipped = useSelector(get('flipped'));
  const isNotesHidden = useSelector(get('isNotesHidden'));
  const notes = useSelector(get('notes'));

  const {
    id: cardId, topic, answer, pathDtos, starCount,
  } = cards[0];

  const KEY_CODE = {
    32: 'SPACE',
    37: 'LEFT',
    39: 'RIGHT',
  };

  const clearNote = () => {
    dispatch(setNotes(''));
  };

  const handleFlip = () => {
    dispatch(flipCard());
  };

  const handleClickWrong = () => {
    clearNote();
    dispatch(clickWrongCard(cardId));
  };

  const handleClickCorrect = () => {
    clearNote();
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

  const handleKeyDown = (event) => {
    const { classList } = event.target;
    if (!classList.contains('notes')) {
      event.preventDefault();

      const { keyCode } = event;

      if (KEY_CODE[keyCode] === 'SPACE') {
        handleFlip();
      } else if (KEY_CODE[keyCode] === 'LEFT') {
        handleClickWrong();
      } else if (KEY_CODE[keyCode] === 'RIGHT') {
        handleClickCorrect();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [cards]);

  return (
    <div style={{ height: '100vh' }}>
      <Header
        accessToken={accessToken}
      >
        <CardsetPath path={pathDtos} />
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
