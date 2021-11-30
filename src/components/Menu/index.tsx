import React, { useState } from 'react';

import { Container, Option } from './styles';

export const Menu: React.FC = () => {
  const [active, setActive] = useState('ABSTRACT');

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
