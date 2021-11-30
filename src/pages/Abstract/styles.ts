import { LoadingPage } from '../../components';
import styled from 'styled-components';

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
  background: green;
`;
