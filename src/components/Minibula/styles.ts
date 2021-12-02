import { KeyboardArrowLeftRounded } from '@material-ui/icons';
import styled from 'styled-components';
import { colors } from 'themes';
import { pxToRem } from 'utils/helpers';

export const Container = styled.div`
  width: 100%;
  height: 70%;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: scroll;

  margin-bottom: ${pxToRem(20)};
`;

export const Content = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: ${pxToRem(30)};
`;

export const Description = styled.p`
  color: ${colors.main.grey};

  font-weight: 200;
  line-height: 1.5;
  text-align: justify;
  font-size: ${pxToRem(19)};
  padding: ${pxToRem(10)} ${pxToRem(100)};

  @media (max-width: ${pxToRem(728)}) {
    padding: ${pxToRem(10)} ${pxToRem(20)} ;
`;

export const Previous = styled(KeyboardArrowLeftRounded).attrs({
  fontSize: 'large'
})`
  color: ${colors.main.background};
  width: 10%;
  cursor: pointer;
`;
