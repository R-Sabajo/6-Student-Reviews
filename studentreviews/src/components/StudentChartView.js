import React from 'react';
import {
  VictoryBar,
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
} from 'victory';
import LeukMoeilijk from './LeukMoeilijk';

const StudentChartView = props => {
  let showScores = props.studentData;

  return (
    <div className="chart">
      <VictoryChart
        domainPadding={20}
        domainPadding={{ x: 20 }}
        width={800}
        height={200}
      >
        <VictoryAxis
          textAnchor="start"
          label="opdracht"
          style={{
            axisLabel: { padding: 30 },
            Label: { fontsize: 6 },
            tickLabels: {
              angle: -90,
              fontSize: 7,
              padding: 15,
            },
          }}
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={showScores.opdracht}
        />
        <VictoryAxis
          label="cijfer"
          style={{
            axisLabel: { padding: 30 },
            tickLabels: { fontSize: 7 },
            ticks: { stroke: 'grey', size: 5 },
          }}
          dependentAxis
          tickFormat={x => `${x}`}
        />
        <VictoryGroup offset={2}>
          <VictoryBar
            data={showScores}
            barWidth={3}
            x={'opdracht'}
            y={'moeilijkheid'}
            style={{ data: { fill: 'salmon' } }}
            animate={{
              duration: 1500,
              onLoad: { duration: 500 },
            }}
          />
          <VictoryBar
            data={showScores}
            x={'opdracht'}
            y={'plezier'}
            alignment="start"
            style={{ data: { fill: 'cornflowerblue' } }}
            animate={{
              duration: 1500,
              onLoad: { duration: 500 },
            }}
          />
        </VictoryGroup>
      </VictoryChart>
      <LeukMoeilijk />
      <VictoryChart
        domainPadding={20}
        domainPadding={{ x: 20 }}
        width={800}
        height={200}
      >
        <VictoryAxis
          label="opdracht"
          style={{
            axisLabel: { padding: 30 },
            Label: { fontsize: 6 },
            tickLabels: {
              angle: -90,
              fontSize: 7,
              padding: 15,
            },
          }}
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={showScores.opdracht}
        />
        <VictoryAxis
          label="cijfer"
          style={{
            axisLabel: { padding: 25, padding: 30 },
            tickLabels: { fontSize: 7 },
            ticks: { stroke: 'grey', size: 5 },
          }}
          dependentAxis
          tickFormat={x => `${x}`}
        />
        <VictoryGroup offset={2}>
          <VictoryLine
            data={showScores}
            barWidth={0.1}
            x={'opdracht'}
            y={'moeilijkheid'}
            style={{ data: { stroke: 'salmon' } }}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 },
            }}
          />
          <VictoryLine
            data={showScores}
            x={'opdracht'}
            y={'plezier'}
            alignment="start"
            style={{ data: { stroke: 'cornflowerblue' } }}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 },
            }}
          />
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
};

export default StudentChartView;
