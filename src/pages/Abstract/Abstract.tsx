import { If, Menu } from '../../components';
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
          <Menu />
        </Container>
      </If>
    </>
  );
};

export default Abstract;
