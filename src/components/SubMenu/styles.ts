import styled from 'styled-components';
import { colors } from 'themes';
import { pxToRem } from 'utils/helpers';

type Props = {
  activeGraph?: boolean;
};

export const Container = styled.div`
  width: 100%;
  height: 7%;
  background: ${colors.secondary.main};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Option = styled.button`
  height: 100%;
  width: 25%;
  border-top: ${(props: Props) =>
    props.activeGraph ? '1px solid #fe7500' : 'none'};

  color: ${colors.main.background};
  font-weight: ${(props: Props) => (props.activeGraph ? '700' : '300')};
  font-size: ${pxToRem(13)};
  cursor: pointer;
  margin: 0 ${pxToRem(10)};
`;
