import { LoadingPage } from '../../components';
import styled from 'styled-components';
import {
  InfoOutlined,
  InfoRounded,
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded
} from '@material-ui/icons';
import { colors } from 'themes';
import { pxToRem } from 'utils/helpers';

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
  color: ${colors.main.background};
  width: 10%;
  cursor: pointer;
`;

export const Next = styled(KeyboardArrowRightRounded).attrs({
  fontSize: 'large'
})`
  color: ${colors.main.background};
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

  padding: 0 ${pxToRem(50)};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  color: ${colors.main.grey};
  font-weight: 300;
  font-size: ${pxToRem(24)};
`;

export const Description = styled.p`
  color: ${colors.main.grey};
  width: 80%;
  font-weight: 200;
  line-height: 1.5;
  text-align: justify;
  font-size: ${pxToRem(16)};
  padding: ${pxToRem(20)} 0;
`;

export const ButtonStyled = styled.button`
  width: ${pxToRem(128)};
  height: ${pxToRem(48)};
  background: ${colors.main.background};
  border-radius: ${pxToRem(4)};
  border: 0;

  color: ${colors.main.secondary};
  font-weight: 500;
  font-size: ${pxToRem(16)};
  cursor: pointer;
  margin-bottom: ${pxToRem(20)};
`;

export const InfoIconStyled = styled(InfoOutlined).attrs({
  fontSize: 'medium'
})`
  color: ${colors.main.background};
  font-size: ${pxToRem(16)};
  cursor: pointer;
`;

export const InfoIconFilled = styled(InfoRounded).attrs({
  fontSize: 'medium'
})`
  color: ${colors.main.background};
  font-size: ${pxToRem(16)};
  cursor: pointer;
`;

export const WrapperGraphic = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.div`
  width: 100%;
  height: ${pxToRem(40)};
  display: flex;
  align-items: center;

  justify-content: flex-start;
`;

export const InfoText = styled.div`
  width: ${pxToRem(280)};
  height: ${pxToRem(38)};
  background: ${colors.secondary.grey};
  color: ${colors.main.grey};
  margin-left: ${pxToRem(10)};
  padding-left: ${pxToRem(10)};
  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-size: ${pxToRem(12)};
  font-weight: 300;
`;
