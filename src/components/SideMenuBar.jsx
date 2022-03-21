import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

const Wrapper = styled.div({
  padding: '5px',
  backgroundColor: '#EDEDED',
});

export default function SideMenuBar({ menus }) {
  return (
    <Wrapper>
      <h1>
        <Link to="/">Limitless</Link>
      </h1>
      <ul>
        {menus.map((menu) => (
          <li
            key={menu.id}
          >
            <Link to={`/cardsets/${menu.id}`}>{menu.title}</Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}
