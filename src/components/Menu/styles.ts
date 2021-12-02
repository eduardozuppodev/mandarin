import styled from 'styled-components';
import { colors } from 'themes';
import { pxToRem } from 'utils/helpers';

type Props = {
  active?: boolean;
};

export const Container = styled.div`
  width: 100%;
  height: 10%;
  background: ${colors.main.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 ${pxToRem(100)};
`;

export const Option = styled.button`
  width: ${pxToRem(128)};
  height: ${pxToRem(48)};
  background: ${(props: Props) =>
    props.active ? `${colors.main.secondary}` : 'none'};
  border-radius: ${pxToRem(4)};
  border: ${(props: Props) => (props.active ? '0' : '1px solid #fff')};

  color: ${(props: Props) =>
    props.active ? colors.main.background : `${colors.main.secondary}`};
  font-weight: 700;
  font-size: ${pxToRem(13)};
  cursor: pointer;
  margin: 0 ${pxToRem(10)};
`;
