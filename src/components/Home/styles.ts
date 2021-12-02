import styled, { keyframes } from 'styled-components';
import { pxToRem } from 'utils/helpers';
import { colors } from '../../themes';

type Props = {
  animation: string;
};

const fadeup = keyframes`
  0% {
    bottom: ${pxToRem(0)}
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
    bottom : ${pxToRem(0)}
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
  color: ${colors.main.secondary};
  padding-top: ${pxToRem(200)};
  font-size: ${pxToRem(100)};
  font-weight: 600;
`;

export const ButtonStyled = styled.button`
  width: ${pxToRem(128)};
  height: ${pxToRem(48)};
  background: ${colors.main.secondary};
  border-radius: ${pxToRem(4)};
  border: 0;

  color: ${colors.main.background};
  font-weight: 500;
  font-size: ${pxToRem(16)};
  cursor: pointer;
`;
