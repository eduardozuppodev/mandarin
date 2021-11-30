import styled from 'styled-components';

import ReactLoading from 'react-loading';
import { colors } from 'themes';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.main.background};
`;

export const Loading = styled(ReactLoading).attrs({
  width: 75,
  height: 75,
  type: 'spinningBubbles',
  color: '#fff'
})`
  overflow: hidden;
`;
