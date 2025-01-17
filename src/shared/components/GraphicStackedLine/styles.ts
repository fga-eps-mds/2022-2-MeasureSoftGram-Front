import ReactEcharts from 'echarts-for-react';
import styled from 'styled-components';

export const GraphicContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StackedLineStyled = styled(ReactEcharts)`
  height: 23rem;
  width: 100%;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 20px;
`;
