import styled from '@emotion/styled';

import { useParams, Link } from 'react-router-dom';

const Wrapper = styled.div({
  height: '100vh',
  width: '220px',
  backgroundColor: '#6c80f6',
});

const Logo = styled.h1({
  width: '7em',
  paddingLeft: '8px',
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
  overflow: 'hidden',
});

const Clicked = styled.div(
  {
    backgroundColor: 'white',
    opacity: '0.3',
  },
  (props) => ({
    width: props.isCurrentCardset ? '4px' : '0',
  }),
);

const Menu = styled.div(
  {
    left: '0',
    height: '100%',
    width: '100%',
    lineHeight: '45px',
    marginBottom: '10px',
    '& a': {
      display: 'block',
      color: 'white',
      fontSize: '17px',
      marginLeft: '5px',
    },
    ':hover': {
      backgroundColor: '#5B40FF',
      opacity: '0.5',
    },
  },
  (props) => ({
    backgroundColor: props.isCurrentCardset ? '#5B40FF' : 'transparent',
    paddingLeft: props.isCurrentCardset ? '0' : '4px',
  }),
);

export default function SideMenuBar({ menus, accessToken, cardsetId }) {
  const { id } = cardsetId || useParams();

  const path = accessToken ? '/root' : '/';

  return (
    <Wrapper>
      <Logo>
        <Link to={path}>
          QuizMap
        </Link>
      </Logo>
      <MenuContainer>
        {menus.map((menu) => (
          <li key={menu.id} style={{ display: 'flex', height: '45px' }}>
            <Clicked
              isCurrentCardset={menu.id === Number(id)}
            />
            <Menu
              isCurrentCardset={menu.id === Number(id)}
            >
              <Link to={`/cardsets/${menu.id}`}>{menu.topic}</Link>
            </Menu>
          </li>
        ))}
      </MenuContainer>
    </Wrapper>
  );
}
