import styled from '@emotion/styled';

const Wrapper = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
});

const CreateCardField = styled.div({
  position: 'absolute',
  display: 'flex',
  top: '55%',
  left: '51%',
  transform: 'translate(-40%, -50%)',
});

const TextArea = styled.textarea({
  width: '19em',
  height: '16em',
  margin: '10px',
  padding: '10px',
  border: '1px solid lightgray',
  borderRadius: '10px',
  boxShadow: 'rgba(0, 0, 0, 0.09) 0px 3px 12px',
  resize: 'none',
  fontSize: '20px',
  backgroundColor: 'transparent',
  fontFamily: 'sans-serif',
});

export default function MainStudio({ currentCard, onChange }) {
  const { question, answer } = currentCard;

  const handleChange = ({ name, value }) => {
    onChange({ name, value });
  };

  return (
    <Wrapper>
      <CreateCardField>
        <TextArea
          value={question}
          name="question"
          id="flashcard-question"
          inputName="question"
          placeholder="enter your question here"
          onChange={(event) => handleChange({ name: 'question', value: event.target.value })}
        />
        <TextArea
          value={answer}
          name="answer"
          id="flashcard-answer"
          inputName="answer"
          placeholder="enter your answer here"
          onChange={(event) => handleChange({ name: 'answer', value: event.target.value })}
        />
      </CreateCardField>
    </Wrapper>
  );
}
