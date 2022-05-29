import { useLayoutEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import {
  changeCardsetTitle,
  addNewCard,
  addNewCardset,
  updateCard,
  clickCard,
  saveCardset,
  expandViewMoreButton,
  contractViewMoreButton,
  deleteClickedCardset,
  deleteClickedCard,
  changeCardsetDueDateTime,
} from '../actions';

import { get } from '../utils';

import CardEditor from '../components/studio/CardEditor';
import InputField from '../components/studio/InputField';
import StudioAddButton from '../components/studio/StudioAddButton';
import SaveButton from '../components/studio/SaveButton';
import SideBarCard from '../components/studio/SideBarCard';
import DateTimePicker from '../components/studio/DateTimePicker';
import ViewMoreButtons from '../components/common/ViewMoreButtons';
import Loading from '../components/common/Loading';

export default function StudioContainer({ id }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const topic = useSelector(get('cardsetTitle'));
  const cards = useSelector(get('cards'));
  const currentCardIndex = useSelector(get('currentCardIndex'));
  const cardsetId = useSelector(get('cardsetId'));
  const clickedCardIndex = useSelector(get('clickedCardIndex'));
  const cardsetDueDateTime = useSelector(get('dueDateTime'));

  // TODO: cardsetDueDate를 Date 객체로 변환하기

  useLayoutEffect(() => {
    navigate(`/studio/${cardsetId}`);
  }, [cardsetId]);

  const handleSave = () => {
    dispatch(saveCardset(id));
  };

  const handleAddCardButtonClick = () => {
    dispatch(addNewCard());
  };

  const handleAddCardsetButtonClick = () => {
    dispatch(addNewCardset(id));
  };

  const handleTitleChange = ({ value: cardsetTitle }) => {
    dispatch(changeCardsetTitle(cardsetTitle));
  };

  const handleInputChange = ({ name, value, cardindex }) => {
    dispatch(updateCard(cardindex, name, value));
  };

  const handleCardClick = (cardIndex) => {
    dispatch(clickCard(cardIndex));
  };

  const handleClickViewMoreButton = (target) => {
    dispatch(expandViewMoreButton(target));
  };

  const handleClickOutside = () => {
    dispatch(contractViewMoreButton());
  };

  const handleClickDeleteButton = (target) => {
    if (target.type === 'CARDSET') {
      dispatch(deleteClickedCardset(target.id));
    } else {
      dispatch(deleteClickedCard(target));
    }
  };

  const handleDateChange = (dueDateTime) => {
    dispatch(changeCardsetDueDateTime(dueDateTime));
  };

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

  const currentCard = cards.filter((card) => card.cardIndex === currentCardIndex);

  return (
    <div>
      <div style={{
        width: '100%',
        height: '60px',
        position: 'fixed',
        zIndex: '999',
        backgroundColor: '#ffffff',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px',
      }}
      >
        <div style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 10px',
        }}
        >
          <div style={{ flex: '1' }}>
            <InputField
              inputText={topic}
              labelText="flashcard-topic"
              id="flashcard-topic"
              inputName="topic"
              placeholder="enter new topic"
              onChange={handleTitleChange}
            />
          </div>
          <div style={{ display: 'flex' }}>
            <DateTimePicker
              cardsetDueDateTime={cardsetDueDateTime}
              onChange={handleDateChange}
            />
            <SaveButton
              onSave={handleSave}
              cardsetId={id}
            />
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', height: '100vh' }}>
        <div style={{
          width: '12.5em',
          padding: '10px',
          overflowY: 'scroll',
          marginTop: '60px',
          backgroundColor: '#EDEDED',
        }}
        >
          {cards.map((card) => {
            if (!card.cardDeleted) {
              return (
                <div
                  key={card.cardIndex}
                  style={{ position: 'relative' }}
                >
                  <SideBarCard
                    selected={card.cardIndex === currentCardIndex}
                    card={card}
                    onClick={handleCardClick}
                    cardText={card.topic}
                  />
                  <ViewMoreButtons
                    target={card}
                    isViewMoreHidden={!(card.cardIndex === clickedCardIndex)}
                    handleClickOutside={handleClickOutside}
                    handleClickViewMoreButton={handleClickViewMoreButton}
                    handleClickDeleteButton={handleClickDeleteButton}
                  />
                </div>
              );
            }
            return null;
          })}
          <StudioAddButton
            onClick={handleAddCardButtonClick}
            buttonText="add new card"
          />
          <StudioAddButton
            onClick={handleAddCardsetButtonClick}
            buttonText="add new cardset"
          />
        </div>
        <CardEditor
          currentCard={currentCard[0]}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
