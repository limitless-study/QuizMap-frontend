import { useDispatch, useSelector } from 'react-redux';

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

  // TODO: id로 현재 cardset의 cards를 다 가져오기

  // TODO: 새로 추가된 카드, 수정한 카드, 제목 수정 여부를 redux에 저장

  const cardset = useSelector(get('cardset'));
  const { title, cards } = cardset;
  const currentCardId = useSelector(get('currentCardId'));
  const currentCard = cards.filter((card) => card.id === currentCardId);

  const handleSave = () => {
    dispatch(saveCardset(cardset));
  };

  const handleTitleChange = ({ name, value }) => {
    dispatch(changeCardsetTitle({ name, value }));
  };

  const handleInputChange = ({ name, value }) => {
    dispatch(updateCard({ currentCardId, name, value }));
  };

  const handleAddCardButtonClick = () => {
    // TODO: 만약 편집기를 불러올 때 마지막 newCardId는 어떻게 알 수 있지? (모든 id들중 max를 찾나?)
    dispatch(addNewCard());
  };

  const handleCardClick = (id) => {
    dispatch(clickCard(id));
  };

  return (
    <div>
      <CreateForm
        currentCardId={currentCardId}
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
