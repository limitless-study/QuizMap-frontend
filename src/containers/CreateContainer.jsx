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

import CreateForm from '../components/CreateForm';

export default function CreateContainer({ id }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const title = useSelector(get('cardsetTitle'));
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

  return (
    <CreateForm
      cardsetId={id}
      currentCardIndex={currentCardIndex}
      title={title}
      cards={cards}
      onSave={handleSave}
      onInputChange={handleInputChange}
      onTitleChange={handleTitleChange}
      onCardClick={handleCardClick}
      onAddCardClick={handleAddCardButtonClick}
      onAddCardsetClick={handleAddCardsetButtonClick}
    />
  );
}
