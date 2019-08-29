import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import routes from './routes';

export default function Routes() {
  return (
    <Switch>
      {routes.map(
        route =>
          route.component && (
            <Route
              key={route.name}
              name={route.name}
              exact={route.exact}
              path={route.path}
              render={props => <route.component {...props} />}
            />
          )
      )}
      <Redirect from="/" to="/home" />
    </Switch>
  );
}
