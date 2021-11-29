import styled from 'styled-components';
import { colors } from '../../themes';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: ${colors.main.background};

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
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
