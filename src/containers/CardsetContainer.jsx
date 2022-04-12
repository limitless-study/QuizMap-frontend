import { useSelector, useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import Cardset from '../components/Cardset';
import SideMenuBar from '../components/SideMenuBar';

import { get } from '../utils';

import {
  expandViewMoreButton,
  contractViewMoreButton,
  deleteClickedCardsetOrCard,
} from '../actions';

const Wrapper = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
});

export default function CardsetContainer() {
  const dispatch = useDispatch();

  const menus = useSelector(get('rootCardsets'));
  const cardsetInfo = useSelector(get('cardsetInfo'));
  const cardsetChildren = useSelector(get('cardsetChildren'));
  const isViewMoreHidden = useSelector(get('isViewMoreHidden'));
  const clickedCardsetId = useSelector(get('clickedCardsetId'));
  const clickedCardId = useSelector(get('clickedCardId'));

  const handleClickViewMoreButton = (type, id) => {
    dispatch(expandViewMoreButton(type, id));
  };

  const handleClickDeleteButton = (type, id) => {
    dispatch(deleteClickedCardsetOrCard(type, id));
  };

  const handleClickOutside = () => {
    dispatch(contractViewMoreButton());
  };

  return (
    <Wrapper>
      <SideMenuBar
        menus={menus}
      />
      <Cardset
      // [고민] 너무 많이 넘겨주나... Cardset에서 어차피 바로 쓰지도 않는데
      // Cardset은 UI 컴포넌트니까 그려주는 용도인데
      // Cardset안에 또 다른 UI 컴포넌트를 만들면
      // 하위 UI 컴포넌트에게도 또 이 전체 props를 다 넘겨줘야하나?
      // 너무 지저분한데
      // UI 컴포넌트 안에 하위 UI 컴포넌트를 만드는게 잘못된걸까?
      // [stackoverflow] → I follow this rule of thumb: Three props is fine.
      // Five props is a code smell. More than seven props is a disaster.
        cardsetInfo={cardsetInfo}
        cardsetChildren={cardsetChildren}
        isViewMoreHidden={isViewMoreHidden}
        clickedCardsetId={clickedCardsetId}
        clickedCardId={clickedCardId}
        handleClickViewMoreButton={handleClickViewMoreButton}
        handleClickDeleteButton={handleClickDeleteButton}
        handleClickOutside={handleClickOutside}
      />
    </Wrapper>
  );
}
