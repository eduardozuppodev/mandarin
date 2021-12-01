import styled from 'styled-components';
import { colors } from 'themes';

type Props = {
  activeGraph?: boolean;
};

export const Container = styled.div`
  width: 100%;
  height: 7%;
  background-color: #ffcd9b58;
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
  font-size: 13px;
  cursor: pointer;
  margin: 0 10px;
`;
