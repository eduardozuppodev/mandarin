import styled, { keyframes } from 'styled-components';
import { colors } from '../../themes';

type Props = {
  animation: string;
};

const fadeup = keyframes`
  0% {
    bottom: 0px
  }
  100%{
    bottom : 100vh
  }
`;

const fadedown = keyframes`
  0% {
    bottom: 100vh
  }
  100%{
    bottom : 0px
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: ${colors.main.background};

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  position: absolute;

  z-index: 10;

  animation-name: ${(props: Props) =>
    props.animation === ''
      ? ''
      : props.animation === 'fadeup'
      ? fadeup
      : fadedown};
  animation-duration: 2.5s;
  animation-fill-mode: forwards;
`;

export const Title = styled.h1`
  color: #fff;
  padding-top: 200px;
  font-size: 100px;
  font-weight: 600;
`;

export const ButtonStyled = styled.button`
  width: 128px;
  height: 48px;
  background: #fff;
  border-radius: 4px;
  border: 0;

  color: #fe7500;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`;
