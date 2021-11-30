import React, { useState } from 'react';

import { Container, Option } from './styles';

export const SubMenu: React.FC = () => {
  const [subActive, setSubActive] = useState('PLACEBO&LARANJA');

  return (
    <Container>
      <Option
        onClick={() => setSubActive('PLACEBO&LARANJA')}
        subActive={subActive === 'PLACEBO&LARANJA'}
      >
        PLACEBO VS. LARANJA
      </Option>
      <Option
        onClick={() => setSubActive('LARANJA')}
        subActive={subActive === 'LARANJA'}
      >
        LARANJA
      </Option>
      <Option
        onClick={() => setSubActive('TANGERINA')}
        subActive={subActive === 'TANGERINA'}
      >
        TANGERINA
      </Option>
    </Container>
  );
};
