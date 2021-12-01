import React, { useState } from 'react';

import { Container, Title, ButtonStyled } from './styles';

type Props = {
  setAnimation: (value: string) => void;
  animation: string;
  onStart: (value: boolean) => void;
};

export const Home: React.FC<Props> = ({
  animation,
  setAnimation,
  onStart,
  ...rest
}) => {
  return (
    <Container animation={animation} {...rest}>
      <Title>MANDARIN</Title>
      <ButtonStyled
        type="button"
        onClick={() => {
          setAnimation('fadeup');
          onStart(true);
        }}
      >
        INICIAR
      </ButtonStyled>
    </Container>
  );
};
