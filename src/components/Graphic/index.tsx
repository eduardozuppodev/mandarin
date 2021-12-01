import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  LabelList,
  Label
} from 'recharts';

import { If } from '../If';

import { vs, orange, tangerine } from '../../services/api';

import {
  Container,
  Header,
  Title,
  Span,
  Select,
  Option,
  Content
} from './styles';

export const Graphic: React.FC = () => {
  const [activeGraph, setActiveGraph] = useState('VS');
  return (
    <Container>
      <Header>
        <Title>Mandarin</Title>
        <Span>vs.</Span>
        <Select onChange={({ target: { value } }) => setActiveGraph(value)}>
          <Option value={'VS'}>Placebo vs. Laranja</Option>
          <Option value={'ORANGE'}>Laranja</Option>
          <Option value={'TANGERINE'}>Tangerina</Option>
        </Select>
      </Header>
      <Content>
        {['VS', 'ORANGE', 'TANGERINE'].map((item: string, index: number) => (
          <If condition={item === activeGraph} key={index}>
            <ResponsiveContainer width="60%" height="100%">
              <BarChart
                width={730}
                height={250}
                data={
                  activeGraph === 'VS'
                    ? vs
                    : activeGraph === 'ORANGE'
                    ? orange
                    : tangerine
                }
                margin={{ top: 25, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name">
                  <Label offset={0} position="insideBottom" />
                </XAxis>
                <Bar dataKey="pv" fill="#FE7500" radius={7}>
                  <LabelList dataKey="Legend" position="top" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </If>
        ))}
      </Content>
    </Container>
  );
};
