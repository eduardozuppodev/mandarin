import { If, Menu, SubMenu, Header, Graphic, Modal } from '../../components';
import React from 'react';

import {
  LoadingPageStyled,
  Container,
  Main,
  Previous,
  Next,
  Content,
  WrapperGraphic,
  WrapperInfo,
  Title,
  Description,
  ButtonStyled,
  InfoIconStyled
} from './styles';

type Props = {
  loaded: boolean;
  modal: boolean;
  openModal: () => void;
  onClose: () => void;
};

const Abstract: React.FC<Props> = ({ loaded, modal, openModal, onClose }) => {
  return (
    <>
      <If condition={!loaded}>
        <LoadingPageStyled />
      </If>
      <If condition={loaded}>
        <Container>
          <Header />
          <Main>
            <Previous />
            <Content>
              <WrapperGraphic>
                <Graphic />
              </WrapperGraphic>
              <WrapperInfo>
                <Title>O Título do parágrafo</Title>
                <Description>
                  Lorem Ipsum é simplesmente uma simulação de texto da indústria
                  tipográfica e de impressos, e vem sendo utilizado desde o
                  século XVI, quando um impressor desconhecido pegou uma bandeja
                  de tipos e os embaralhou para fazer um livro de modelos de
                  tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como
                  também ao salto para a editoração eletrônica, permanecendo
                  essencialmente inalterado. Se popularizou na década de 60,
                  quando a Letraset lançou decalques contendo passagens de Lorem
                  Ipsum.
                </Description>
                <ButtonStyled onClick={openModal}>ESTUDO</ButtonStyled>
                <If condition={modal}>
                  <Modal onClose={onClose} />
                </If>
                <InfoIconStyled />
              </WrapperInfo>
            </Content>
            <Next />
          </Main>
          <SubMenu />
          <Menu />
        </Container>
      </If>
    </>
  );
};

export default Abstract;
