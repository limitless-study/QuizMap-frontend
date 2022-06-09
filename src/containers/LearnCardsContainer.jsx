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
  top: 0,
  left: 0,
  right: 0,
  zIndex: '50',
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

  const initializeFlip = () => {
    const front = document.querySelector('.card-front');
    const back = document.querySelector('.card-back');
    front.style.transform = '';
    back.style.transform = '';
    front.style.position = 'relative';
    back.style.position = 'absolute';
  };

  const handleFlip = () => {
    const front = document.querySelector('.card-front');
    const back = document.querySelector('.card-back');
    if (front.style.transform === 'rotateY(-180deg)') {
      front.style.transform = 'rotateY(0deg)';
      back.style.transform = 'rotateY(-180deg)';
      front.style.position = 'relative';
      back.style.position = 'absolute';
    } else {
      front.style.transform = 'rotateY(-180deg)';
      back.style.transform = 'rotateY(0deg)';
      front.style.position = 'absolute';
      back.style.position = 'relative';
    }
  };

  const handleClickWrong = () => {
    const handleAfterSwipeLeft = (flipCard) => {
      dispatch(clickWrongCard(cardId));
      clearNote();
      flipCard.classList.add('swipe-initial');
      flipCard.classList.remove('swipe-left');
    };

    const flipCard = document.querySelector('.flip-card');
    flipCard.classList.add('swipe-left');
    initializeFlip();
    flipCard.addEventListener('animationend', () => {
      handleAfterSwipeLeft(flipCard);
    }, { once: true });
  };

  const handleClickCorrect = () => {
    const handleAfterSwipeRight = (flipCard) => {
      dispatch(clickCorrectCard(cardId));
      clearNote();
      flipCard.classList.add('swipe-initial');
      flipCard.classList.remove('swipe-right');
    };

    const flipCard = document.querySelector('.flip-card');
    initializeFlip();
    flipCard.classList.add('swipe-right');
    flipCard.addEventListener('animationend', () => {
      handleAfterSwipeRight(flipCard);
    }, { once: true });
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
      <div className="card-player">
        <div className="swipe-wrapper">
          <div className="flip-card swipe-initial">
            <div className="flip-card-wrapper">
              <div className="card-flip">
                <div className="card-flipper">
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
                </div>
              </div>
            </div>
          </div>
          <CardButtons
            onFlip={handleFlip}
            onClickWrong={handleClickWrong}
            onClickCorrect={handleClickCorrect}
          />
        </div>
      </div>
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
  );
}
