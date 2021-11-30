import { If } from 'components/If';
import React from 'react';

import { LoadingPageStyled } from './styles';

type Props = {
  loaded: boolean;
};

const Abstract: React.FC<Props> = ({ loaded }) => {
  return (
    <If condition={!loaded}>
      <LoadingPageStyled />
    </If>
  );
};

export default Abstract;
