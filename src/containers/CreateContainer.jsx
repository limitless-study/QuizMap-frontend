import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import {
  loadCards,
  changeCardsetTitle,
  addNewCard,
  updateCard,
  clickCard,
  loadCardsetInfo,
} from '../actions';

import { get } from '../utils';

import CreateForm from '../components/CreateForm';

export default function CreateContainer({ id }) {
  const dispatch = useDispatch();

  // [error] too many rendering
  // TODO: /:id 가 바뀔 때 useEffect가 실행되도록
  dispatch(loadCards(Number(id)));
  dispatch(loadCardsetInfo(Number(id)));
  const { name: cardsetName } = useSelector(get('cardsetInfo'));
  dispatch(changeCardsetTitle({ cardsetTitle: cardsetName }));

  const title = useSelector(get('cardsetTitle'));
  const cards = useSelector(get('cards'));
  const currentCardIndex = useSelector(get('currentCardIndex'));
  const currentCard = cards.filter((card) => card.cardIndex === currentCardIndex);

  const handleSave = () => {
    // TODO: 새로 추가된 카드, 수정한 카드, 제목 수정 여부를 redux에 저장
    // dispatch(saveCardset(cardset));
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
