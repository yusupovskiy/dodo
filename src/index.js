import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import './fonts/Roboto/roboto.css';
import allReducers from "./js/reducers";
import Catalog from './js/components/catalog';
import Basket from './js/components/basket';

import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory(),
      store = createStore(allReducers);

store.subscribe(() => {
  localStorage.setItem('basketFoods', JSON.stringify(store.getState().basketFoods));
});

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <div>
        <Route path="//" component={ Catalog } />
        <Route path="/basket" component={ Basket } />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
