import React from 'react';
import { GlobalStyles } from '../themes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Abstract } from '../pages';
import { Routing } from './routing';
import { inject, observer } from 'mobx-react';

const RoutesContainer = () => (
  <>
    <GlobalStyles />
    <BrowserRouter>
      <Switch>
        <Route exact path={Routing.HOME} component={Abstract} />
      </Switch>
    </BrowserRouter>
  </>
);

export { Routing };
export default inject('routing')(observer(RoutesContainer));
