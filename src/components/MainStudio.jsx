import styled from '@emotion/styled';

import MilkDown from './MilkDown';

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

export default function MainStudio({ currentCard, onChange }) {
  const { question, answer } = currentCard;

  const handleChange = ({ name, value }) => {
    onChange({ name, value });
  };

  return (
    <Wrapper>
      <CreateCardField>
        <MilkDown
          value={question}
          name="question"
          id="flashcard-question"
          inputName="question"
          placeholder="enter your question here"
          onChange={(event) => handleChange({ name: 'question', value: event.target.value })}
        />
        <MilkDown
          value={answer}
          name="question"
          id="flashcard-question"
          inputName="question"
          placeholder="enter your question here"
          onChange={(event) => handleChange({ name: 'question', value: event.target.value })}
        />
      </CreateCardField>
    </Wrapper>
  );
}
