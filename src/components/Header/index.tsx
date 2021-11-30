import React from 'react';
import { Container, Title, SubTitle, TextWrapper, Logo } from './styles';
import LogoImg from '../../assets/png/logo.png';

export const Header: React.FC = () => {
  return (
    <Container>
      <TextWrapper>
        <Title>O título é Lorem Ipsum?</Title>
        <SubTitle>O subtítulo é Lorem Ipsum?</SubTitle>
      </TextWrapper>
      <Logo src={LogoImg} />
    </Container>
  );
};
