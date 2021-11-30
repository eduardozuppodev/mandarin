import React from 'react';
import Routes from './routes';
import { Router } from 'react-router-dom';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import store from './stores';

import { createBrowserHistory } from 'history';
import { Provider } from 'mobx-react';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const routing = syncHistoryWithStore(browserHistory, routingStore);

const stores = { ...store, routing };

const App = () => (
  <Provider {...stores}>
    <Router history={routing}>
      <Routes />
    </Router>
  </Provider>
);

export default App;
