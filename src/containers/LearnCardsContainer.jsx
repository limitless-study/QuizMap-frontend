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
  clickWrongCard,
  clickCorrectCard,
  changeStarCount,
  setNotesHidden,
  setNotes,
} from '../actions';

const Header = styled.div({
  padding: '10px 40px',
  display: 'flex',
  position: 'fixed',
  width: '100vw',
  maxWidth: '100vw',
  height: '60px',
  zIndex: '100',
  fontSize: '24px',
  fontWeight: 'bolder',
  boxSizing: 'border-box',
  backgroundColor: 'white',
  justifyContent: 'space-between',
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

const CardItemsWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
  width: '500px',
});

const CardContainer = styled.div({
  position: 'relative',
  height: '380px',
  '.is-flipped': {
    transform: 'rotateX(180deg)',
  },
});

export default function LearnCardsContainer({ id }) {
  const dispatch = useDispatch();

  const accessToken = useSelector(get('accessToken'));
  const cards = useSelector(get('cards'));
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

  const moveCardToLeft = () => {
    const front = document.querySelector('.front');
    const back = document.querySelector('.back');
    /* when clicked 'X' don't flip card */
    front.style.transition = 'none';
    back.style.transition = 'none';

    front.classList.remove('is-flipped');
    back.classList.add('is-flipped');
  };

  const moveCardToRight = () => {
    const front = document.querySelector('.front');
    const back = document.querySelector('.back');
    /* when clicked 'O' don't flip card */
    front.style.transition = 'none';
    back.style.transition = 'none';

    front.classList.remove('is-flipped');
    back.classList.add('is-flipped');
  };

  const handleFlip = () => {
    const front = document.querySelector('.front');
    const back = document.querySelector('.back');
    /* refresh cardset animation */
    front.style.transition = null;
    back.style.transition = null;
    front.classList.toggle('is-flipped');
    back.classList.toggle('is-flipped');
  };

  const handleClickWrong = () => {
    moveCardToLeft();
    clearNote();
    dispatch(clickWrongCard(cardId));
  };

  const handleClickCorrect = () => {
    moveCardToRight();
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
        <FinishButton
          type="button"
        >
          <Link to={`/cardsets/${id}`}>Finish</Link>
        </FinishButton>
      </Header>
      <div style={{
        display: 'flex', flex: 1, position: 'relative', height: '100vh',
      }}
      >
        <CardItemsWrapper>
          <CardContainer>
            <Card
              id={id}
              className="front"
              content={topic}
              starCount={starCount}
              onChangeStarCount={handleChangeStarCount}
            />
            <Card
              id={id}
              className="back"
              content={answer}
              starCount={starCount}
              onChangeStarCount={handleChangeStarCount}
            />
          </CardContainer>
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
        <LearningSidebar
          isNotesHidden={isNotesHidden}
          onClick={handleClickSideBarButton}
        />
      </div>
    </div>
  );
}
