import { useSelector, useDispatch } from 'react-redux';

import CardsetInfo from '../components/CardsetInfo';
import SideMenuBar from '../components/SideMenuBar';
import SubTitle from '../components/SubTitle';
import CardsetBox from '../components/CardsetBox';
import CardBox from '../components/CardBox';
import ViewMoreButtons from '../components/ViewMoreButtons';

import { get } from '../utils';

import {
  expandViewMoreButton,
  contractViewMoreButton,
  deleteClickedCardsetOrCard,
} from '../actions';

export default function CardsetContainer() {
  const dispatch = useDispatch();

  const menus = useSelector(get('rootCardsets'));
  const cardsetInfo = useSelector(get('cardsetInfo'));
  const cardsetChildren = useSelector(get('cardsetChildren'));
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
    <div style={{ width: '100vw', height: '100vh', display: 'flex' }}>
      <SideMenuBar
        menus={menus}
      />
      <CardsetInfo cardsetInfo={cardsetInfo} />
      <SubTitle text="Cards" />
      <div>
        {cardsetChildren.map((child) => {
          if (child.type === 'CARDSET') {
            return (
              <div>
                <CardsetBox cardset={child} />
                <ViewMoreButtons
                  cardset={child}
                  isViewMoreHidden={!(child.id === clickedCardsetId)}
                  handleClickOutside={handleClickOutside}
                  handleClickViewMoreButton={handleClickViewMoreButton}
                  handleClickDeleteButton={handleClickDeleteButton}
                />
              </div>
            );
          }
          return (
            <div>
              <CardBox card={child} />
              <ViewMoreButtons
                cardset={child}
                isViewMoreHidden={!(child.id === clickedCardId)}
                handleClickOutside={handleClickOutside}
                handleClickViewMoreButton={handleClickViewMoreButton}
                handleClickDeleteButton={handleClickDeleteButton}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
