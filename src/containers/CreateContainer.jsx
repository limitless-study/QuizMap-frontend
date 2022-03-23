import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import {
  changeCardsetTitle,
  addNewCard,
  updateCard,
  clickCard,
  saveCardset,
} from '../actions';

import { get } from '../utils';

import CreateForm from '../components/CreateForm';

export default function CreateContainer({ id }) {
  const dispatch = useDispatch();

  const title = useSelector(get('cardsetTitle'));
  const cards = useSelector(get('cards'));

  console.log(cards);

  const currentCardIndex = useSelector(get('currentCardIndex'));
  const currentCard = cards.filter((card) => card.cardIndex === currentCardIndex);

  const handleSave = () => {
    // TODO: 새로 추가된 카드, 수정한 카드, 제목 수정 여부를 redux에 저장
    dispatch(saveCardset({ cardsetId: id, cardsetTitle: title, cards }));
  };

  const handleAddCardButtonClick = () => {
    dispatch(addNewCard());
  };

  const handleTitleChange = ({ value: cardsetTitle }) => {
    dispatch(changeCardsetTitle({ cardsetTitle }));
  };

  const handleInputChange = ({ name, value }) => {
    dispatch(updateCard({ currentCardIndex, name, value }));
  };

  const handleCardClick = (cardIndex) => {
    dispatch(clickCard(cardIndex));
  };

  return (
    <div>
      <CreateForm
        currentCardIndex={currentCardIndex}
        currentCard={currentCard[0]}
        title={title}
        cards={cards}
        onSave={handleSave}
        onInputChange={handleInputChange}
        onTitleChange={handleTitleChange}
        onCardClick={handleCardClick}
        onAddCardClick={handleAddCardButtonClick}
      />
    </div>
  );
}
