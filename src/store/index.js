import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import history from '~/routes/history';
import reducers from './ducks';
import sagas from './sagas';

const middlewares = [routerMiddleware(history)];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const store = createStore(
  reducers(history),
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(sagas);

export default store;
