import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { colors } from 'themes';
import { pxToRem } from 'utils/helpers';

export const Container = styled.div`
  width: 100%;
  height: 20%;
  padding: 0 ${pxToRem(100)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${pxToRem(728)}) {
    padding: ${pxToRem(30)};
  } ;
`;

export const TextWrapper = styled.div`
  width: 90%;
`;

export const Title = styled.h1`
  color: ${colors.main.background};
  font-weight: 500;
  font-size: ${pxToRem(60)};

  @media (max-width: ${pxToRem(728)}) {
    font-size: ${pxToRem(25)};
  } ;
`;

export const SubTitle = styled.h1`
  color: ${colors.main.grey};
  font-weight: 500;
  font-size: ${pxToRem(40)};

  @media (max-width: ${pxToRem(728)}) {
    font-size: ${pxToRem(18)};
  } ;
`;
export const Logo = styled.img`
  width: ${pxToRem(120)};
`;
