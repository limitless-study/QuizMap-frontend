import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/home/Header';

import { get } from '../utils';

import {
  setToggleDropDown, logout,
} from '../actions';

const GoogleFormContainer = styled.div({
  width: '100%',
  flex: 1,
  maxWidth: '100%',
  textAlign: 'center',
  overflow: 'hidden',
});

export default function FeedbackPage() {
  const dispatch = useDispatch();

  const userInfo = useSelector(get('userInfo'));
  const accessToken = useSelector(get('accessToken'));
  const toggleDropDown = useSelector(get('toggleDropDown'));
  const feedbackURL = 'https://docs.google.com/forms/d/e/1FAIpQLSel9y_IftVHIjwJQueDzzAh0uO_F6ScOiWuhxUYe8iSnP96Qw/viewform?usp=sf_link';

  const handleToggleDropDown = (toggleDropdown) => {
    dispatch(setToggleDropDown(toggleDropdown));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{
      width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column',
    }}
    >
      <header>
        <Header
          email={userInfo.email}
          accessToken={accessToken}
          toggleDropDown={toggleDropDown}
          onClickToggle={handleToggleDropDown}
          onClickLogout={handleLogout}
        />
      </header>
      <GoogleFormContainer>
        <iframe
          wmode="transparent"
          title="feedback"
          src={feedbackURL}
          height="100%"
          width="100%"
          frameBorder="0"
          allowFullScreen
          sandbox="allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin"
        />
      </GoogleFormContainer>
    </div>
  );
}
