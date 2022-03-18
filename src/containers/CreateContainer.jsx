import { useDispatch, useSelector } from 'react-redux';

import {
  changeCardsetTitle,
  addNewCard,
  updateCard,
  clickCard,
} from '../actions';

import { get } from '../utils';

import CreateForm from '../components/CreateForm';

export default function CreateContainer() {
  const dispatch = useDispatch();

  const { title, cards } = useSelector(get('cardset'));
  const currentCardId = useSelector(get('currentCardId'));
  const currentCard = cards.filter((card) => card.id === currentCardId);

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
        currentCard={currentCard[0]}
        title={title}
        cards={cards}
        onInputChange={handleInputChange}
        onTitleChange={handleTitleChange}
        onCardClick={handleCardClick}
        onAddCardClick={handleAddCardButtonClick}
      />
    </div>
  );
}
