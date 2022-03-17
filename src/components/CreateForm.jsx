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

export default function CreateForm({ fields, onChange }) {
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  const { title, question, answer } = fields;

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
            onChange={handleChange}
          />
        </CreateCardTitle>
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </CreateCard>
      </CreateCardField>
    </Wrapper>
  );
}
