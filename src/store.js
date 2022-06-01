import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';

import { loadItem } from './services/storage';

import {
  setToken, setUserInfo,
} from './actions';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

function loadUser() {
  try {
    const accessToken = loadItem('accessToken');
    const email = loadItem('email');
    const rootCardSetId = loadItem('rootCardSetId');
    if (accessToken) {
      store.dispatch(setToken(accessToken));
      store.dispatch(setUserInfo({ email, rootCardSetId }));
    }
  } catch (e) {
    console.log(e);
  }
}

loadUser();

export default store;
