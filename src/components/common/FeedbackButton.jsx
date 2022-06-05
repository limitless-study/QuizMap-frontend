import styled from '@emotion/styled';

import { RiChatHeartFill } from 'react-icons/ri';

import { Link } from 'react-router-dom';

const FloatingButton = styled.div({
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  right: '0',
  bottom: '0',
  margin: '30px',
  width: '70px',
  height: '70px',
  backgroundColor: '#6c80f6',
  borderRadius: '10em',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  transition: 'width .3s ease, box-shadow .4s ease',
  '& a': {
    justifyContent: 'center',
    width: '100%',
    position: 'block',
    display: 'flex',
    alignItems: 'center',
  },
  ':hover': {
    width: '150px',
    boxShadow: 'rgba(0, 0, 0, 0.5) 0px 3px 8px',
    '& a': {
      '& p': {
        width: '70px',
        paddingLeft: '5px',
        opacity: '1',
      },
    },
  },
});

const FeedBackText = styled.p({
  width: '0',
  opacity: '0',
  fontWeight: 'bolder',
  color: 'white',
});

export default function FeedbackButton() {
  return (
    <FloatingButton>
      <Link to="/feedback">
        <RiChatHeartFill size={28} color="white" />
        <FeedBackText>Feedback</FeedBackText>
      </Link>
    </FloatingButton>
  );
}
