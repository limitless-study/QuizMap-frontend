import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';

import { loadItem } from './services/storage';

import {
  setToken,
} from './actions';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

function loadUser() {
  try {
    const accessToken = loadItem('accessToken');
    if (accessToken) {
      store.dispatch(setToken(accessToken));
    }
  } catch (e) {
    console.log(e);
  }
}

loadUser();

export default store;
