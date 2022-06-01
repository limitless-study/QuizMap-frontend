import { useDispatch } from 'react-redux';

import { useEffect } from 'react';

import RootContainer from '../containers/RootContainer';

import {
  loadRootCardsets,
  initializeRootPage,
} from '../actions';

export default function RootPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeRootPage());
    dispatch(loadRootCardsets());
  });

  return (
    <div>
      <RootContainer />
    </div>
  );
}
