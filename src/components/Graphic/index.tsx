import React from 'react';

import { Container, Header, Title, Span, Select, Option } from './styles';

export const Graphic: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Mandarin</Title>
        <Span>vs.</Span>
        <Select>
          <Option>Placebo vs. Laranja</Option>
          <Option>Laranja</Option>
          <Option>Tangerina</Option>
        </Select>
      </Header>
    </Container>
  );
};
