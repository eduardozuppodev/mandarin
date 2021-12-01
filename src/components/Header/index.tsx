import React from 'react';
import { Container, Title, SubTitle, TextWrapper, Logo } from './styles';
import LogoImg from '../../assets/png/logo.png';

type Props = {
  title?: string;
  subtitle?: string;
};

export const Header: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <Container>
      <TextWrapper>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </TextWrapper>
      <Logo src={LogoImg} />
    </Container>
  );
};
