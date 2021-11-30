import { LoadingPage } from '../../components';
import styled from 'styled-components';
import {
  InfoOutlined,
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
  cursor: pointer;
`;

export const Next = styled(KeyboardArrowRightRounded).attrs({
  fontSize: 'large'
})`
  color: #fe7500;
  width: 10%;
  cursor: pointer;
`;

export const Content = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const WrapperInfo = styled.div`
  width: 50%;
  height: 95%;

  padding: 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #666666;
  font-weight: 300;
  font-size: 24px;
`;

export const Description = styled.p`
  color: #666666;
  width: 80%;
  font-weight: 200;
  line-height: 1.5;
  text-align: justify;
  font-size: 16px;
  padding: 20px 0;
`;

export const ButtonStyled = styled.button`
  width: 128px;
  height: 48px;
  background: #fe7500;
  border-radius: 4px;
  border: 0;

  color: #fff;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const InfoIconStyled = styled(InfoOutlined).attrs({
  fontSize: 'medium'
})`
  color: #fe7500;
  font-size: 16px;
  cursor: pointer;
`;

export const WrapperGraphic = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
