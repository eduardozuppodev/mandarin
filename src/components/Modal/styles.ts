import styled from 'styled-components';
import { Close } from '@material-ui/icons';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
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
  width: 858px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const WrapperClose = styled.div`
  width: 38px;
  height: 38px;
  background: #fe7500;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const CloseIcon = styled(Close)`
  color: #fff;
`;

export const WrapperContent = styled.div`
  margin-top: 15px;
  width: 858px;
  height: 382px;
  border-radius: 4px;
  background: #fff;

  padding: 40px;
`;

export const Content = styled.p`
  text-align: justify;
  margin-top: 15px;
  color: #666666;
  font-weight: 200;
  line-height: 1.5;
  text-align: justify;
  font-size: 14px;
`;
