import { KeyboardArrowLeftRounded } from '@material-ui/icons';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70%;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: scroll;

  margin-bottom: 20px;
`;

export const Content = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Description = styled.p`
  color: #666666;

  font-weight: 200;
  line-height: 1.5;
  text-align: justify;
  font-size: 19px;
  padding: 10px 100px;
`;

export const Previous = styled(KeyboardArrowLeftRounded).attrs({
  fontSize: 'large'
})`
  color: #fe7500;
  width: 10%;
  cursor: pointer;
`;
