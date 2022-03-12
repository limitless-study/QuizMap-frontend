import ReactDOM from 'react-dom';

import { Global } from '@emotion/react';

import {
  BrowserRouter,
} from 'react-router-dom';

import { Provider } from 'react-redux';

import global from './css/global';

import App from './App';

import store from './store';

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Global styles={global} />
        <App />
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('app'),
);
