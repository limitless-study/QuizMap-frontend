import styled from '@emotion/styled';

import { FaFolder } from 'react-icons/fa';

import { useParams, Link } from 'react-router-dom';

const Wrapper = styled.div({
  height: '100vh',
  backgroundColor: '#6c80f6',
});

const Logo = styled.h1({
  width: '7em',
  marginBottom: '5px',
  margin: '5px',
  '& a': {
    fontWeight: 'lighter',
    fontSize: '28px',
    color: 'white',
  },
});

const MenuContainer = styled.ul({
  paddingTop: '10px',
  paddingLeft: '20px',
  overflow: 'hidden',
});

const SelectedMenu = styled.li({
  right: '0',
  backgroundColor: '#F4F4F4',
  marginBottom: '10px',
  borderRadius: '20px 0px 0px 20px',
  boxShadow: 'rgba(50, 50, 93, 0.15) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
  padding: '5px 0 5px 10px',
  fontWeight: 'bolder',
  '& a': {
    color: '#323232',
    fontSize: '14px',
    marginLeft: '5px',
  },
  '& a:hover': {
    textDecoration: 'underline',
  },
});

const Menu = styled.li({
  right: '0',
  backgroundColor: '#DDDDDD',
  marginBottom: '10px',
  borderRadius: '20px 0px 0px 20px',
  padding: '5px 0 5px 10px',
  fontWeight: 'bolder',
  '& a': {
    color: '#323232',
    fontSize: '14px',
    marginLeft: '5px',
  },
  '& a:hover': {
    color: '#5B40FF',
    textDecoration: 'underline',
    textDecorationColor: '#5B40FF',
  },
});

export default function SideMenuBar({ menus, cardsetId }) {
  const { id } = cardsetId || useParams();

  return (
    <Wrapper>
      <Logo>
        <Link to="/">
          QuizMap
        </Link>
      </Logo>
      <MenuContainer>
        {menus.map((menu) => {
          if (menu.id === Number(id)) {
            return (
              <SelectedMenu
                key={menu.id}
              >
                <FaFolder color="#5B40FF" />
                <Link to={`/cardsets/${menu.id}`}>{menu.topic}</Link>
              </SelectedMenu>
            );
          }
          return (
            <Menu
              key={menu.id}
            >
              <FaFolder color="#5B40FF" />
              <Link to={`/cardsets/${menu.id}`}>{menu.topic}</Link>
            </Menu>
          );
        })}
      </MenuContainer>
    </Wrapper>
  );
}
