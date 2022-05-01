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

  const handleChange = ({ name, value, cardindex }) => {
    onChange({ name, value, cardindex });
  };

  return (
    <Wrapper>
      <CreateCardField>
        <MilkDown
          cardIndex={cardIndex}
          value={topic}
          onChange={(cardindex, value) => handleChange({ name: 'topic', value, cardindex })}
        />
        <MilkDown
          cardIndex={cardIndex}
          value={answer}
          onChange={(cardindex, value) => handleChange({ name: 'answer', value, cardindex })}
        />
      </CreateCardField>
    </Wrapper>
  );
}
