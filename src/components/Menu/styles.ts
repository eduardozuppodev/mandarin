import styled from 'styled-components';
import { colors } from 'themes';

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
  padding: 0 100px;
`;

export const Option = styled.button`
  width: 128px;
  height: 48px;
  background: ${(props: Props) => (props.active ? '#fff' : 'none')};
  border-radius: 4px;
  border: ${(props: Props) => (props.active ? '0' : '1px solid #fff')};

  color: ${(props: Props) => (props.active ? colors.main.background : '#fff')};
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  margin: 0 10px;
`;
