import { If, Menu, SubMenu } from '../../components';
import React from 'react';

import { LoadingPageStyled, Container } from './styles';

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
          <SubMenu />
          <Menu />
        </Container>
      </If>
    </>
  );
};

export default Abstract;
