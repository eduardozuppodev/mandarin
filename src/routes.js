import React from 'react';
import { GlobalStyles } from './themes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages';

const Routes = () => (
  <>
    <GlobalStyles />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </>
);

export default Routes;
