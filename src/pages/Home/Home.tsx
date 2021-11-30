import React from 'react';

import { Container, Title, ButtonStyled } from './styles';

type Props = {
  onAbstract: () => void;
};

const Home: React.FC<Props> = ({ onAbstract }) => {
  return (
    <Container>
      <Title>MANDARIN</Title>
      <ButtonStyled type="button" onClick={onAbstract}>
        INICIAR
      </ButtonStyled>
    </Container>
  );
};

export default Home;
