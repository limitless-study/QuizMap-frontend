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
  const { topic, answer, cardIndex } = currentCard;

  const handleChange = ({ name, value }) => {
    onChange({ name, value });
  };

  return (
    <Wrapper>
      <CreateCardField>
        <MilkDown
          cardIndex={cardIndex}
          value={topic}
          onChange={(value) => handleChange({ name: 'topic', value })}
        />
        <MilkDown
          cardIndex={cardIndex}
          value={answer}
          onChange={(value) => handleChange({ name: 'answer', value })}
        />
      </CreateCardField>
    </Wrapper>
  );
}
