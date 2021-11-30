import React, { useState } from 'react';

import { Container, Title, ButtonStyled } from './styles';

export const Home: React.FC = ({ ...rest }) => {
  const [start, onStart] = useState(false);

  return (
    <Container start={start} {...rest}>
      <Title>MANDARIN</Title>
      <ButtonStyled type="button" onClick={() => onStart(true)}>
        INICIAR
      </ButtonStyled>
    </Container>
  );
};
