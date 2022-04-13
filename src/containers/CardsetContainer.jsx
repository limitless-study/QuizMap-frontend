import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import CardsetInfo from '../components/CardsetInfo';
import SideMenuBar from '../components/SideMenuBar';
import SubTitle from '../components/SubTitle';
import CardsetBox from '../components/CardsetBox';
import CardBox from '../components/CardBox';

import { get } from '../utils';

const BoxContainer = styled.div({
  width: '95%',
  height: '60%',
  overflow: 'auto',
  '::-webkit-scrollbar': {
    width: '10px',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: '#F1F1F1',
    borderRadius: '10px',
  },
});

export default function CardsetBoxContainer() {
  const menus = useSelector(get('rootCardsets'));
  const cardsetInfo = useSelector(get('cardsetInfo'));
  const cardsetChildren = useSelector(get('cardsetChildren'));

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex' }}>
      <SideMenuBar
        menus={menus}
      />
      <div style={{ width: '100%', padding: '20px' }}>
        <CardsetInfo cardsetInfo={cardsetInfo} />
        <SubTitle text="Cards" />
        <BoxContainer>
          {cardsetChildren.map((child) => {
            if (child.type === 'CARDSET') {
              return (
                <CardsetBox cardset={child} />
              );
            }
            return (
              <CardBox card={child} />
            );
          })}
        </BoxContainer>
      </div>
    </div>
  );
}
