import React, { useState } from 'react';

import { Container, Title, ButtonStyled } from './styles';

type Props = {
  animation: string;
};

export const Home: React.FC<Props> = ({ animation, ...rest }) => {
  const [start, onStart] = useState(false);

  return (
    <Container
      animation={start && animation !== 'fadedown' ? 'fadeup' : animation}
      {...rest}
    >
      <Title>MANDARIN</Title>
      <ButtonStyled type="button" onClick={() => onStart(true)}>
        INICIAR
      </ButtonStyled>
    </Container>
  );
};
