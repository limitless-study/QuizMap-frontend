import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import CardsetInfo from '../components/CardsetInfo';
import SideMenuBar from '../components/SideMenuBar';
import SubTitle from '../components/SubTitle';
import CardsetBox from '../components/CardsetBox';
import CardBox from '../components/CardBox';

import { get } from '../utils';

import {
  deleteClickedCardset,
} from '../actions';

export default function CardsetContainer({ cardsetId }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const menus = useSelector(get('rootCardsets'));
  const cardsetInfo = useSelector(get('cardsetInfo'));
  const cardsetChildren = useSelector(get('cardsetChildren'));

  const { parentId } = cardsetInfo;

  const handleDeleteCardset = () => {
    dispatch(deleteClickedCardset(cardsetId));

    if (parentId === 1) {
      navigate('/root');
    } else {
      navigate(`/cardsets/${parentId}`);
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex' }}>
      <SideMenuBar
        menus={menus}
      />
      <div style={{ width: '100%', padding: '20px' }}>
        <CardsetInfo
          cardsetInfo={cardsetInfo}
          onDelete={handleDeleteCardset}
        />
        <SubTitle text="Cards" />
        <div style={{ width: '92%' }}>
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
