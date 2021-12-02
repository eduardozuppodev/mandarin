import styled from 'styled-components';
import { colors } from 'themes';
import { pxToRem } from 'utils/helpers';

export const Container = styled.div`
  width: ${pxToRem(493)};
  height: ${pxToRem(433)};
  border: ${pxToRem(2)} solid ${colors.main.orange};
  border-radius: ${pxToRem(4)};
`;

export const Header = styled.div`
  width: 100%;
  height: 20%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Title = styled.h1`
  color: ${colors.main.background};
  font-weight: 500;
  font-size: ${pxToRem(24)};
`;

export const Span = styled.span`
  margin: 0 ${pxToRem(10)};
  color: ${colors.main.grey};
  font-weight: 100;
  font-size: ${pxToRem(24)};
`;

export const Select = styled.select`
  border: 0;
  width: ${pxToRem(200)};
  height: 50%;
  position: relative;
  float: left;
  font-family: 'Roboto';
  font-weight: 100;
  font-size: ${pxToRem(18)};
  color: ${colors.main.grey};
  background: ${colors.main.orange};
  border: none;
`;

export const Option = styled.option``;

export const Content = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
