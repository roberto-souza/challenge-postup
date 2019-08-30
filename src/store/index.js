import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import history from '~/routes/history';
import reducers from './ducks';

const middlewares = [routerMiddleware(history)];

const store = createStore(
  reducers(history),
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
