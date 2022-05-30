import styled from '@emotion/styled';
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi';

import { useNavigate } from 'react-router-dom';

const ButtonContainer = styled.div({
  display: 'flex',
  marginRight: '5px',
});

const Button = styled.div({
  width: '25px',
  height: '25px',
  marginRight: '2px',
  borderRadius: '10em',
  border: '1px solid #F1F1EF',
  ':hover': {
    backgroundColor: '#F1F1EF',
    cursor: 'pointer',
  },
});

export default function HistoryButtons() {
  const navigate = useNavigate();

  return (
    <ButtonContainer>
      <Button>
        <HiArrowSmLeft size={25} color="darkgray" style={{ paddingRight: '2px' }} onClick={() => navigate(-1)} />
      </Button>
      <Button>
        <HiArrowSmRight size={25} color="darkgray" onClick={() => navigate(1)} />
      </Button>
    </ButtonContainer>
  );
}
