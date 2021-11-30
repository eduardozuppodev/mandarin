import { LoadingPage } from '../../components';
import styled from 'styled-components';
import {
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded
} from '@material-ui/icons';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

export const LoadingPageStyled = styled(LoadingPage)``;

export const Main = styled.div`
  width: 100%;
  height: 63%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Previous = styled(KeyboardArrowLeftRounded).attrs({
  fontSize: 'large'
})`
  color: #fe7500;
  width: 10%;
`;

export const Next = styled(KeyboardArrowRightRounded).attrs({
  fontSize: 'large'
})`
  color: #fe7500;
  width: 10%;
`;

export const Content = styled.div`
  width: 90%;
  height: 100%;
`;
