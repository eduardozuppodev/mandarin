import {
  If,
  Menu,
  SubMenu,
  Header,
  Graphic,
  Modal,
  Home,
  Minibula
} from '../../components';
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
  InfoIconStyled,
  InfoIconFilled,
  Info,
  InfoText
} from './styles';

type Props = {
  loaded: boolean;
  modal: boolean;
  openModal: () => void;
  info: boolean;
  openInfo: () => void;
  onClose: () => void;
  active: string;
  setActive: (value: string) => void;
  animation: string;
  setAnimation: (value: string) => void;
  onStart: (value: boolean) => void;
  setActiveGraph: (value: string) => void;
  activeGraph: string;
};

const Abstract: React.FC<Props> = ({
  loaded,
  modal,
  openModal,
  onClose,
  openInfo,
  info,
  active,
  setActive,
  setAnimation,
  animation,
  setActiveGraph,
  activeGraph,
  onStart
}) => {
  return (
    <>
      <If condition={!loaded}>
        <LoadingPageStyled />
      </If>

      <If condition={loaded}>
        <Container>
          <Home
            setAnimation={setAnimation}
            onStart={onStart}
            animation={animation}
          />

          <If condition={active === 'ABSTRACT'}>
            <Header
              title={'O título é Lorem Ipsum?'}
              subtitle={'O subtítulo é Lorem Ipsum?'}
            />
            <Main>
              <Previous
                onClick={() => {
                  setAnimation('fadedown');
                  onStart(false);
                }}
              />
              <Content>
                <WrapperGraphic>
                  <Graphic
                    activeGraph={activeGraph}
                    setActiveGraph={setActiveGraph}
                  />
                </WrapperGraphic>
                <WrapperInfo>
                  <Title>O Título do parágrafo</Title>
                  <Description>
                    Lorem Ipsum é simplesmente uma simulação de texto da
                    indústria tipográfica e de impressos, e vem sendo utilizado
                    desde o século XVI, quando um impressor desconhecido pegou
                    uma bandeja de tipos e os embaralhou para fazer um livro de
                    modelos de tipos. Lorem Ipsum sobreviveu não só a cinco
                    séculos, como também ao salto para a editoração eletrônica,
                    permanecendo essencialmente inalterado. Se popularizou na
                    década de 60, quando a Letraset lançou decalques contendo
                    passagens de Lorem Ipsum.
                  </Description>
                  <ButtonStyled onClick={openModal}>ESTUDO</ButtonStyled>

                  <If condition={modal}>
                    <Modal onClose={onClose} />
                  </If>

                  <Info>
                    {info ? (
                      <InfoIconFilled onClick={openInfo} />
                    ) : (
                      <InfoIconStyled onClick={openInfo} />
                    )}
                    <If condition={info}>
                      <InfoText>O que é Lorem Ipsum?</InfoText>
                    </If>
                  </Info>
                </WrapperInfo>
              </Content>
              <Next onClick={() => setActive('MINIBULA')} />
            </Main>
            <SubMenu
              activeGraph={activeGraph}
              setActiveGraph={setActiveGraph}
            />
          </If>
          <If condition={active === 'MINIBULA'}>
            <Header title={'MINIBULA'} />
            <Minibula previous={() => setActive('ABSTRACT')} />
          </If>

          <Menu active={active} setActive={setActive} />
        </Container>
      </If>
    </>
  );
};

export default Abstract;
