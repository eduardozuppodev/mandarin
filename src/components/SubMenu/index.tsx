import React, { useState } from 'react';

import { Container, Option } from './styles';

type Props = {
  activeGraph: string;
  setActiveGraph: (value: string) => void;
};

export const SubMenu: React.FC<Props> = ({ activeGraph, setActiveGraph }) => {
  return (
    <Container>
      <Option
        onClick={() => setActiveGraph('VS')}
        activeGraph={activeGraph === 'VS'}
      >
        PLACEBO VS. LARANJA
      </Option>
      <Option
        onClick={() => setActiveGraph('ORANGE')}
        activeGraph={activeGraph === 'ORANGE'}
      >
        LARANJA
      </Option>
      <Option
        onClick={() => setActiveGraph('TANGERINE')}
        activeGraph={activeGraph === 'TANGERINE'}
      >
        TANGERINA
      </Option>
    </Container>
  );
};
