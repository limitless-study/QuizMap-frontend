import styled from '@emotion/styled';

import InputField from './InputField';

const Wrapper = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
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
    boxShadow: 'rgba(0, 0, 0, 0.09) 0px 3px 12px',
  },
});

export default function MainStudio({ currentCard, onChange }) {
  const { question, answer } = currentCard;

  return (
    <Wrapper>
      <CreateCardField>
        <CreateCard>
          <InputField
            inputText={question}
            labelText="flashcard-question"
            id="flashcard-question"
            inputName="question"
            placeholder="enter your question here"
            onChange={onChange}
          />
        </CreateCard>
        <CreateCard>
          <InputField
            inputText={answer}
            labelText="flashcard-answer"
            id="flashcard-answer"
            inputName="answer"
            placeholder="enter your answer here"
            onChange={onChange}
          />
        </CreateCard>
      </CreateCardField>
    </Wrapper>
  );
}
