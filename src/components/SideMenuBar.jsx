import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

const Wrapper = styled.div({
  padding: '5px',
  backgroundColor: '#EDEDED',
});

const Logo = styled.h1({
  width: '5em',
  '& a': {
    fontSize: '28px',
    color: 'white',
  },
});

const MenuContainer = styled.ul({
  width: '100%',
});

const Menu = styled.li({
  right: '0',
  backgroundColor: '#DDDDDD',
  margin: '10px 0',
  borderRadius: '20px 0px 0px 20px',
  padding: '5px 0 5px 10px',
  fontWeight: 'bolder',
});

export default function SideMenuBar({ menus }) {
  return (
    <Wrapper>
      <Logo>
        <Link to="/">
          Limitless
        </Link>
      </Logo>
      <MenuContainer>
        {menus.map((menu) => (
          <Menu
            key={menu.id}
          >
            <Link to={`/cardsets/${menu.id}`}>{menu.title}</Link>
          </Menu>
        ))}
      </MenuContainer>
    </Wrapper>
  );
}
