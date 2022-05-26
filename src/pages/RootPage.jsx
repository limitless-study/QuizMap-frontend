import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';
import RootContainer from '../containers/RootContainer';

import {
  loadRootCardsets,
} from '../actions';

import { loadItem } from '../services/storage';

export default function RootPage() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const accessToken = loadItem('accessToken');

  useEffect(() => {
    if (!accessToken) navigate('/login');
    else dispatch(loadRootCardsets());
  });

  return (
    <div>
      <RootContainer />
    </div>
  );
}
