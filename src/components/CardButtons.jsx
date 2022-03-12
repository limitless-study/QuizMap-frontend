import styled from '@emotion/styled';

const CardButtonsWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '15px',
  height: '50px',
});

const WrongButton = styled.button({
  width: '50px',
  marginRight: '15px',
  backgroundColor: '#e44b88',
  border: 'none',
  borderRadius: '30px',
  color: 'white',
  ':hover': {
    cursor: 'pointer',
  },
});

const FlipButton = styled.button({
  flex: 1,
  marginRight: '15px',
  border: 'none',
  borderRadius: '30px',
  ':hover': {
    cursor: 'pointer',
  },
});

const CorrectButton = styled.button({
  width: '50px',
  backgroundColor: '#01dca4',
  border: 'none',
  borderRadius: '30px',
  color: 'white',
  ':hover': {
    cursor: 'pointer',
  },
});

export default function CardButtons({ onFlip, onClick }) {
  const handleClick = (event) => {
    const { target: { innerHTML } } = event;
    onClick(innerHTML);
  };

  return (
    <CardButtonsWrapper>
      <WrongButton
        type="button"
        onClick={handleClick}
      >
        X
      </WrongButton>
      <FlipButton
        type="button"
        onClick={onFlip}
      >
        FLIP
      </FlipButton>
      <CorrectButton
        type="button"
        onClick={handleClick}
      >
        O
      </CorrectButton>
    </CardButtonsWrapper>
  );
}
