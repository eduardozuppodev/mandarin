import React, { useState } from 'react';

import { Container, Option } from './styles';

type Props = {
  active: string;
  setActive: (value: string) => void;
};

export const Menu: React.FC<Props> = ({ active, setActive }) => {
  return (
    <Container>
      <Option
        onClick={() => setActive('ABSTRACT')}
        active={active === 'ABSTRACT'}
      >
        RESUMO
      </Option>
      <Option
        onClick={() => setActive('MINIBULA')}
        active={active === 'MINIBULA'}
      >
        MINIBULA
      </Option>
    </Container>
  );
};
