import React from 'react';

import { Container, Description, Previous, Content } from './styles';

type Props = {
  previous: () => void;
};

export const Minibula: React.FC<Props> = ({ previous }) => {
  return (
    <Container>
      <Content>
        <Previous onClick={previous} />
        <Description>
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
          quando um impressor desconhecido pegou uma bandeja de tipos e os
          embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
          sobreviveu não só a cinco séculos, como também ao salto para a
          editoração eletrônica, permanecendo essencialmente inalterado. Se
          popularizou na década de 60, quando a Letraset lançou decalques
          contendo passagens de Lorem Ipsum. Lorem Ipsum é simplesmente uma
          simulação de texto da indústria tipográfica e de impressos, e vem
          sendo utilizado desde o século XVI, quando um impressor desconhecido
          pegou uma bandeja de tipos e os embaralhou para fazer um livro de
          modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como
          também ao salto para a editoração eletrônica, permanecendo
          essencialmente inalterado. Se popularizou na década de 60, quando a
          Letraset lançou decalques contendo passagens de Lorem Ipsum. Lorem
          Ipsum sobreviveu não só a cinco séculos, como também ao salto para a
          editoração eletrônica, permanecendo essencialmente inalterado. Se
          popularizou na década de 60, quando a Letraset lançou decalques
          contendo passagens de Lorem Ipsum. Lorem Ipsum sobreviveu não só a
          cinco séculos, como também ao salto para a editoração eletrônica,
          permanecendo essencialmente inalterado. Se popularizou na década de
          60, quando a Letraset lançou decalques contendo passagens de Lorem
          Ipsum. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao
          salto para a editoração eletrônica, permanecendo essencialmente
          inalterado. Se popularizou na década de 60, quando a Letraset lançou
          decalques contendo passagens deSe popularizou na década de 60, quando
          a Letraset lançou decalques contendo passagens de Lorem Ipsum.
        </Description>
      </Content>
    </Container>
  );
};
