import {
  Link,
} from 'react-router-dom';

import styled from '@emotion/styled';

import { HiLogout } from 'react-icons/hi';

import { loadItem } from '../../services/storage';

const MenuBar = styled.header({
  background: 'white',
  padding: '0 80px',
  height: '3rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
});

const Title = styled.div({
  paddingLeft: '16px',
  fontSize: '24px',
  fontWeight: '400',
  transition: 'opacity 0.4s',
  '& a': {
    color: '#624de6',
  },
  ':hover': {
    opacity: '0.8',
  },
});

const MenuItems = styled.ul({
  display: 'flex',
  textAlign: 'center',
  '& li': {
    marginRight: '16px',
    display: 'list-item',
  },
});

const UserButton = styled.button({
  verticalAlign: 'middle',
  padding: '4px 10px',
  border: '1px solid #624de6',
  borderRadius: '10em',
  height: '100%',
  transition: 'opacity 0.4s',
  background: 'transparent',
  color: '#624de6',
  ':hover': {
    cursor: 'pointer',
    opacity: '0.8',
  },
});

const LoginButton = styled.li({
  transition: 'opacity 0.4s',
  padding: '4px',
  ':hover': {
    opacity: '0.7',
  },
});

const SignUpButton = styled.li({
  border: 'none',
  borderRadius: '5px',
  padding: '4px 10px',
  transition: 'opacity 0.4s',
  background: '#6479fa',
  '& a': {
    color: 'white',
    display: 'block',
  },
  ':hover': {
    opacity: '0.7',
  },
});

const ToggleDropDown = styled.div(
  {
    position: 'absolute',
    width: '150px',
    padding: '7px',
    zIndex: '10',
    marginTop: '5px',
    backgroundColor: 'white',
    transition: 'opacity .2s ease',
    borderRadius: '7px',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    opacity: '0.9',
    ':hover': {
      backgroundColor: '#e7e5ff',
      opacity: '0.85',
      cursor: 'pointer',
    },
  },
  (props) => ({
    display: props.toggleDropDown ? 'block' : 'none',
  }),
);

export default function Header({
  email, toggleDropDown, onClickToggle, onClickLogout,
}) {
  const accessToken = loadItem('accessToken');

  return (
    <MenuBar>
      <Title className="logo">
        <Link to="/">QuizMap</Link>
      </Title>
      <MenuItems>
        {accessToken
          ? (
            <li style={{ position: 'relative' }}>
              <UserButton
                type="button"
                onClick={() => onClickToggle(true)}
                onBlur={() => onClickToggle(false)}
              >
                {email}
              </UserButton>
              <ToggleDropDown
                toggleDropDown={toggleDropDown}
                onMouseDown={onClickLogout}
              >
                <HiLogout style={{ marginRight: '10px' }} />
                Log out
              </ToggleDropDown>
            </li>
          )
          : (
            <>
              <LoginButton><Link to="/login">log in</Link></LoginButton>
              <SignUpButton><Link to="/signup">sign up</Link></SignUpButton>
            </>
          )}
      </MenuItems>
    </MenuBar>
  );
}
