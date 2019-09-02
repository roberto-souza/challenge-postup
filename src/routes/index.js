import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import history from './history';

import Application from '~/pages';
import Login from '~/pages/Login';

export default function Routes() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" render={props => <Application {...props} />} />
        <Route path="/login" render={props => <Login {...props} />} />
      </Switch>
    </ConnectedRouter>
  );
}
