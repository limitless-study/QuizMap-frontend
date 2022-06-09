import styled from '@emotion/styled';

import { CgEditFlipH } from 'react-icons/cg';

const CardButtonsWrapper = styled.div({
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '70px',
  padding: '20px',
  '& button': {
    height: '100%',
    fontSize: '20px',
    fontWeight: 'bolder',
  },
  background: 'linear-gradient(to top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.1))',
});

const WrongButton = styled.button({
  width: '70px',
  marginRight: '15px',
  backgroundColor: '#e44b88',
  border: 'none',
  borderRadius: '10em',
  color: 'white',
  transition: 'box-shadow 0.3s',
  zIndex: 999,
  ':hover': {
    boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;',
    cursor: 'pointer',
  },
});

const FlipButton = styled.button({
  width: '300px',
  marginRight: '15px',
  border: 'none',
  borderRadius: '10em',
  zIndex: 999,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  ':hover': {
    boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;',
    cursor: 'pointer',
  },
});

const CorrectButton = styled.button({
  width: '70px',
  backgroundColor: '#01dca4',
  border: 'none',
  borderRadius: '10em',
  color: 'white',
  transition: 'box-shadow 0.3s',
  zIndex: 999,
  ':hover': {
    boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;',
    cursor: 'pointer',
  },
});

export default function CardButtons({ onFlip, onClickWrong, onClickCorrect }) {
  const handleClickWrong = () => {
    onClickWrong();
  };

  const handleClickCorrect = () => {
    onClickCorrect();
  };

  return (
    <CardButtonsWrapper>
      <WrongButton
        type="button"
        onClick={handleClickWrong}
      >
        X
      </WrongButton>
      <FlipButton
        type="button"
        onClick={onFlip}
      >
        <CgEditFlipH size={30} style={{ paddingRight: '5px' }} />
        Flip
      </FlipButton>
      <CorrectButton
        type="button"
        onClick={handleClickCorrect}
      >
        O
      </CorrectButton>
    </CardButtonsWrapper>
  );
}
