import { If, Menu, SubMenu, Header } from '../../components';
import React from 'react';

import { LoadingPageStyled, Container, Main } from './styles';

type Props = {
  loaded: boolean;
};

const Abstract: React.FC<Props> = ({ loaded }) => {
  return (
    <>
      <If condition={!loaded}>
        <LoadingPageStyled />
      </If>
      <If condition={loaded}>
        <Container>
          <Header />
          <Main />
          <SubMenu />
          <Menu />
        </Container>
      </If>
    </>
  );
};

export default Abstract;
