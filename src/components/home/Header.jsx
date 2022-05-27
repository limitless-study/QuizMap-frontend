import {
  Link,
} from 'react-router-dom';

import styled from '@emotion/styled';

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
  border: 'none',
  borderRadius: '10em',
  height: '100%',
  transition: 'opacity 0.4s',
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

export default function Header() {
  const accessToken = loadItem('accessToken');
  const email = 'kim.eunseo@kakao.com'; // TODO: CHANGE!!

  return (
    <MenuBar>
      <Title className="logo">
        <Link to="/">QuizMap</Link>
      </Title>
      <MenuItems>
        {accessToken
          ? (
            <li>
              <UserButton type="button" onClick={() => {}}>
                {email}
              </UserButton>
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
