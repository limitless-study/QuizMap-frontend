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
} from '../actions';

import { get } from '../utils';

import MainStudio from '../components/MainStudio';
import InputField from '../components/InputField';
import StudioAddButton from '../components/StudioAddButton';
import SaveButton from '../components/SaveButton';
import SideBarCard from '../components/SideBarCard';

export default function StudioContainer({ id }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const topic = useSelector(get('cardsetTitle'));
  const cards = useSelector(get('cards'));
  const currentCardIndex = useSelector(get('currentCardIndex'));
  const cardsetId = useSelector(get('cardsetId'));

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

  const handleInputChange = ({ name, value }) => {
    dispatch(updateCard({ currentCardIndex, name, value }));
  };

  const handleCardClick = (cardIndex) => {
    dispatch(clickCard(cardIndex));
  };

  if (cards.length === 0) {
    return (
      <div>Loading...</div>
    );
  }

  const currentCard = cards.filter((card) => card.cardIndex === currentCardIndex);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{
        width: '12.5em',
        height: '100vh',
        padding: '10px',
        overflow: 'scroll',
        backgroundColor: '#EDEDED',
      }}
      >
        <InputField
          inputText={topic}
          labelText="flashcard-topic"
          id="flashcard-topic"
          inputName="topic"
          placeholder="enter new topic"
          onChange={handleTitleChange}
        />
        {cards.map((card) => (
          <SideBarCard
            key={card.cardIndex}
            selected={card.cardIndex === currentCardIndex}
            card={card}
            onClick={handleCardClick}
            cardText={card.question}
          />
        ))}
        <StudioAddButton
          onClick={handleAddCardButtonClick}
          buttonText="add new card"
        />
        <StudioAddButton
          onClick={handleAddCardsetButtonClick}
          buttonText="add new cardset"
        />
      </div>
      <MainStudio
        currentCard={currentCard[0]}
        onChange={handleInputChange}
      />
      <SaveButton
        onSave={handleSave}
        cardsetId={id}
      />
    </div>
  );
}
