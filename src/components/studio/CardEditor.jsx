import styled from '@emotion/styled';

import MilkDown from './MilkDown';

import Loading from '../common/Loading';

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

export default function CardEditor({ currentCard, onChange }) {
  if (!currentCard) {
    return (
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      >
        <Loading
          size={80}
        />
      </div>
    );
  }

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
