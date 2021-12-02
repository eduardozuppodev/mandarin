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
`;

export const TextWrapper = styled.div`
  width: 90%;
`;

export const Title = styled(Typography).attrs({
  variant: 'h3'
})`
  color: ${colors.main.background};
`;

export const SubTitle = styled(Typography).attrs({
  variant: 'h5'
})`
  color: ${colors.main.grey};
`;

export const Logo = styled.img`
  width: ${pxToRem(120)};
`;
