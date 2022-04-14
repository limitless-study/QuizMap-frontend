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
  transition: 'box-shadow 0.3s',
  ':hover': {
    boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;',
    cursor: 'pointer',
  },
});

const FlipButton = styled.button({
  flex: 1,
  marginRight: '15px',
  border: 'none',
  borderRadius: '30px',
  transition: 'box-shadow 0.3s',
  ':hover': {
    boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;',
    cursor: 'pointer',
  },
});

const CorrectButton = styled.button({
  width: '50px',
  backgroundColor: '#01dca4',
  border: 'none',
  borderRadius: '30px',
  color: 'white',
  transition: 'box-shadow 0.3s',
  ':hover': {
    boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;',
    cursor: 'pointer',
  },
});

export default function CardButtons({ onFlip, onClick }) {
  const wrongNumber = -1;
  const correntNumber = 1;

  const handleClick = (feedbackNumber) => {
    onClick(feedbackNumber);
  };

  return (
    <CardButtonsWrapper>
      <WrongButton
        type="button"
        onClick={() => handleClick(wrongNumber)}
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
        onClick={() => handleClick(correntNumber)}
      >
        O
      </CorrectButton>
    </CardButtonsWrapper>
  );
}