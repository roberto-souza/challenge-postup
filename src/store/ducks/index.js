import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as loader } from './loader';
import { reducer as post } from './post';

export default history =>
  combineReducers({ router: connectRouter(history), loader, post });
