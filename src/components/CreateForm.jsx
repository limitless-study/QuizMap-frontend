import styled from '@emotion/styled';

const Wrapper = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
});

const Label = styled.label({
  display: 'none',
});

const SideBar = styled.div({
  backgroundColor: '#EDEDED',
  overflow: 'scroll',
});

const CreateCardTitle = styled.div({
  '& input': {
    fontSize: '15px',
    border: 'none',
    borderBottom: '1px solid lightgray',
    backgroundColor: 'transparent',
    margin: '10px',
  },
  '& input:focus': {
    outline: 'none',
    borderBottom: '1px solid gray',
  },
});

const CreateCardField = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

const CreateCard = styled.div({
  padding: '10px',
  '& input': {
    width: '21em',
    height: '16em',
    padding: '10px',
    border: '1px solid lightgray',
    borderRadius: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.09) 0px 3px 12px;',
  },
});

const CardButtonField = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const Card = styled.button({
  margin: '5px auto',
  width: '10em',
  height: '8em',
});

export default function CreateForm({
  title, cards, currentCard, onTitleChange, onInputChange, onCardClick, onAddCardClick,
}) {
  const handleCardClick = (event) => {
    const { target: { id } } = event;
    onCardClick(Number(id));
  };

  function handleTitleChange(event) {
    const { target: { name, value } } = event;
    onTitleChange({ name, value });
  }

  function handleInputChange(event) {
    const { target: { name, value } } = event;
    onInputChange({ name, value });
  }

  const { question, answer } = currentCard;

  return (
    <Wrapper>
      <SideBar>
        <CreateCardTitle>
          <Label
            htmlFor="flashcard-title"
          >
            flashcard title
          </Label>
          <input
            type="text"
            id="flashcard-title"
            name="title"
            value={title}
            placeholder="enter new title"
            onChange={handleTitleChange}
          />
        </CreateCardTitle>
        <CardButtonField>
          {cards.map((card) => (
            <Card
              type="button"
              key={card.id}
              id={card.id}
              onClick={handleCardClick}
            >
              {card.question}
            </Card>
          ))}
        </CardButtonField>
        <button
          type="button"
          name="add-card"
          onClick={onAddCardClick}
        >
          Add New Card
        </button>
      </SideBar>
      <CreateCardField>
        <CreateCard>
          <Label
            htmlFor="flashcard-question"
          >
            flashcard question
          </Label>
          <input
            type="text"
            id="flashcard-question"
            name="question"
            value={question}
            placeholder="enter your question here"
            onChange={handleInputChange}
          />
        </CreateCard>
        <CreateCard>
          <Label
            htmlFor="flashcard-answer"
          >
            flashcard answer
          </Label>
          <input
            type="text"
            id="flashcard-answer"
            name="answer"
            value={answer}
            placeholder="enter your answer here"
            onChange={handleInputChange}
          />
        </CreateCard>
      </CreateCardField>
    </Wrapper>
  );
}
