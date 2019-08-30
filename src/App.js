import React from 'react';
import { Provider } from 'react-redux';

import GlobalStyles from '~/styles/global';

import Routes from '~/routes';
import store from '~/store';

import './dependencies';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Routes />
    </Provider>
  );
}

export default App;
