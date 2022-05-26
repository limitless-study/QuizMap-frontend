import { useNavigate } from 'react-router-dom';

import { useLayoutEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { get } from '../utils';

import SubTitle from '../components/main/SubTitle';
import SideMenuBar from '../components/main/SideMenuBar';
import RootCard from '../components/main/RootCard';
import AddCardsetButton from '../components/studio/AddCardsetButton';
import ViewMoreButtons from '../components/common/ViewMoreButtons';

import {
  addNewCardset,
  expandViewMoreButton,
  contractViewMoreButton,
  deleteClickedCardset,
  deleteClickedCard,
} from '../actions';

export default function RootContainer() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const rootCardSetId = useSelector(get('rootCardSetId'));
  const rootCardsets = useSelector(get('rootCardsets'));
  const cardsetId = useSelector(get('cardsetId'));
  const clickedCardsetId = useSelector(get('clickedCardsetId'));

  useLayoutEffect(() => {
    navigate(`/studio/${cardsetId}`);
  }, [cardsetId]);

  const handleAddNewCardset = () => {
    dispatch(addNewCardset(rootCardSetId));
  };

  const handleClickViewMoreButton = (target) => {
    dispatch(expandViewMoreButton(target));
  };

  const handleClickOutside = () => {
    dispatch(contractViewMoreButton());
  };

  const handleClickDeleteButton = (target) => {
    if (target.type === 'CARDSET') {
      dispatch(deleteClickedCardset(target.id));
    } else {
      dispatch(deleteClickedCard(target));
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex' }}>
      <SideMenuBar
        menus={[]}
      />
      <div style={{ padding: '30px', width: '100%' }}>
        <SubTitle
          text="Cardsets"
        />
        <div style={{
          display: 'flex', flexWrap: 'wrap', marginTop: '10px', gap: '15px',
        }}
        >
          {rootCardsets.map((cardset) => (
            <div
              key={cardset.id}
              style={{ position: 'relative', width: '260px', height: '180px' }}
            >
              <RootCard cardset={cardset} />
              <ViewMoreButtons
                target={cardset}
                isViewMoreHidden={!(cardset.id === clickedCardsetId)}
                handleClickOutside={handleClickOutside}
                handleClickViewMoreButton={handleClickViewMoreButton}
                handleClickDeleteButton={handleClickDeleteButton}
              />
            </div>
          ))}
          <AddCardsetButton
            handleClick={handleAddNewCardset}
          />
        </div>
      </div>
    </div>
  );
}
