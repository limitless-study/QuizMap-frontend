import styled from '@emotion/styled';

import MilkDown from './MilkDown';

import Loading from '../common/Loading';

const Wrapper = styled.div({
  width: '100vw',
  marginTop: '60px',
  display: 'flex',
  position: 'relative',
  overflow: 'auto',
});

const CreateCardField = styled.div({
  position: 'absolute',
  display: 'flex',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  margin: 'auto',
  marginLeft: '15px',
  padding: '0 1em',
  height: '21em',
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
