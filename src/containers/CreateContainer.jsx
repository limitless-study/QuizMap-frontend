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

  const title = useSelector(get('cardsetTitle'));
  const cards = useSelector(get('cards'));
  const currentCardIndex = useSelector(get('currentCardIndex'));

  const handleSave = () => {
    dispatch(saveCardset({ cardsetId: id, cardsetTitle: title, cards }));
  };

  const handleAddCardButtonClick = () => {
    dispatch(addNewCard());
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
    <div>
      <CreateForm
        currentCardIndex={currentCardIndex}
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
