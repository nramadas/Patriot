import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import App from 'app';
import reducers from 'app/reducers';

(() => {
  const data = {};
  const clientReducers = combineReducers(reducers);

  const store = createStore(clientReducers, data, compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  console.log(store.getState());
  store.subscribe(() => console.log(store.getState()));

  ReactDOM.render(
    <Provider store={ store }>
      <App/>
    </Provider>
    ,document.getElementById('container')
  );
})();
