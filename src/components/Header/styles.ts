import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 20%;
  padding: 0 100px;
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
  color: #fe7500;
`;

export const SubTitle = styled(Typography).attrs({
  variant: 'h5'
})`
  color: #666666;
`;

export const Logo = styled.img`
  width: 120px;
`;
