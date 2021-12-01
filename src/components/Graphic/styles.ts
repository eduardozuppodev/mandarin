import styled from 'styled-components';

export const Container = styled.div`
  width: 493px;
  height: 433px;
  border: 2px solid #ffeedc;
  border-radius: 4px;
`;

export const Header = styled.div`
  width: 100%;
  height: 20%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Title = styled.h1`
  color: #fe7500;
  font-weight: 500;
  font-size: 24px;
`;

export const Span = styled.span`
  margin: 0 10px;
  color: #666666;
  font-weight: 100;
  font-size: 24px;
`;

export const Select = styled.select`
  border: 0;
  width: 200px;
  height: 50%;
  position: relative;
  float: left;
  font-family: 'Roboto';
  font-weight: 100;
  font-size: 18px;
  color: #666666;
  background: #ffeedc;
  border: none;
`;

export const Option = styled.option``;

export const Content = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
