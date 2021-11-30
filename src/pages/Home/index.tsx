import { inject, observer } from 'mobx-react';
import React from 'react';
import { useHistory } from 'react-router';
import Home from './Home';

const HomeContainer = () => {
  const history = useHistory();

  const onAbstract = () => {
    history.push('/resumo');
  };

  return <Home onAbstract={onAbstract} />;
};

export default inject('routing')(observer(HomeContainer));
