import { useDispatch } from 'react-redux';

import RootContainer from '../containers/RootContainer';

import {
  loadRootCardsets,
} from '../actions';

export default function RootPage() {
  const dispatch = useDispatch();

  dispatch(loadRootCardsets(0));

  return (
    <div>
      <RootContainer />
    </div>
  );
}
