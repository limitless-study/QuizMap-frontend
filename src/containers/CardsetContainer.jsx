import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import CardsetPath from '../components/main/CardsetPath';
import HistoryButtons from '../components/main/HistoryButtons';
import CardsetInfo from '../components/main/CardsetInfo';
import SideMenuBar from '../components/main/SideMenuBar';
import SubTitle from '../components/main/SubTitle';
import CardsetBox from '../components/main/CardsetBox';
import CardBox from '../components/main/CardBox';
import UserInfoField from '../components/common/UserInfoField';

import { get } from '../utils';

import {
  deleteClickedCardset,

  setToggleDropDown, logout,
} from '../actions';

export default function CardsetContainer({ cardsetId }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const accessToken = useSelector(get('accessToken'));
  const toggleDropDown = useSelector(get('toggleDropDown'));
  const menus = useSelector(get('rootCardsets'));
  const userInfo = useSelector(get('userInfo'));
  const cardsetInfo = useSelector(get('cardsetInfo'));
  const cardsetChildren = useSelector(get('cardsetChildren'));
  const { path, parentId, dueDate } = cardsetInfo;
  const date = dueDate ? new Date(dueDate) : null;

  const handleDeleteCardset = async () => {
    await dispatch(deleteClickedCardset(cardsetId));
    if (parentId === Number(userInfo.rootCardSetId)) {
      navigate('/root');
    } else {
      navigate(`/cardsets/${parentId}`);
    }
  };

  const handleToggleDropDown = (toggleDropdown) => {
    dispatch(setToggleDropDown(toggleDropdown));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{
      width: '100vw', height: '100vh', maxHeight: '100vh', display: 'flex',
    }}
    >
      <SideMenuBar
        menus={menus}
        accessToken={accessToken}
        cardsetId={cardsetId}
      />
      <div style={{ position: 'absolute', left: '10px', bottom: '10px' }}>
        <UserInfoField
          email={userInfo.email}
          toggleDropDown={toggleDropDown}
          onClickToggle={handleToggleDropDown}
          onClickLogout={handleLogout}
        />
      </div>
      <div style={{ width: '100%', padding: '20px', overflow: 'auto' }}>
        <div style={{ width: '100%', display: 'flex' }}>
          <HistoryButtons />
          <CardsetPath rootCardSetId={userInfo.rootCardSetId} path={path} cardsetId={cardsetId} />
        </div>
        <CardsetInfo
          cardsetInfo={cardsetInfo}
          onDelete={handleDeleteCardset}
          date={date}
        />
        <SubTitle text="Cards" />
        <div style={{
          display: 'flex', flexWrap: 'wrap', marginTop: '10px', gap: '10px',
        }}
        >
          {cardsetChildren.map((child) => {
            if (child.type === 'CARDSET') {
              return (
                <CardsetBox key={child.id} cardset={child} />
              );
            }
            return (
              <CardBox key={child.id} card={child} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
