import styled from 'styled-components';
import { Close } from '@material-ui/icons';
import { colors } from 'themes';
import { pxToRem } from 'utils/helpers';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${colors.modal.background};
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 10;
  position: fixed;
  cursor: pointer;
  flex-direction: column;
`;

export const CloseBar = styled.div`
  width: ${pxToRem(858)};
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: ${pxToRem(728)}) {
    width: 100%;
  }
`;

export const WrapperClose = styled.div`
  width: ${pxToRem(38)};
  height: ${pxToRem(38)};
  background: ${colors.main.background};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${pxToRem(4)};

  @media (max-width: ${pxToRem(728)}) {
    margin-right: ${pxToRem(10)};
  }
`;

export const CloseIcon = styled(Close)`
  color: ${colors.main.secondary};
`;

export const WrapperContent = styled.div`
  margin-top: ${pxToRem(15)};
  width: ${pxToRem(858)};
  height: ${pxToRem(382)};
  border-radius: ${pxToRem(4)};
  background: ${colors.main.secondary};

  padding: ${pxToRem(40)};

  @media (max-width: ${pxToRem(728)}) {
    width: 100%;
    height: auto;
    overflow: scroll;
  }
`;

export const Content = styled.p`
  text-align: justify;
  margin-top: ${pxToRem(15)};
  color: ${colors.main.grey};
  font-weight: 200;
  line-height: 1.5;
  text-align: justify;
  font-size: ${pxToRem(14)};
`;
