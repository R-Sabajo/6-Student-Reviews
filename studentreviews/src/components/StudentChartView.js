import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup } from 'victory';

const StudentChartView = props => {
  let showScores = props.studentData;

  return (
    <div className="chart">
      <VictoryChart domainPadding={40} width={800} height={250}>
        <VictoryAxis
          label="opdracht"
          style={{
            axisLabel: { padding: 30 },
            Label: { fontsize: 3 },
            tickLabels: { angle: -90, fontSize: 8 },
          }}
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={showScores.opdracht}
        />
        <VictoryAxis
          label="cijfer"
          style={{
            axisLabel: { padding: 25 },
            tickLabels: { fontSize: 7 },
          }}
          dependentAxis
          tickFormat={x => `${x}`}
        />
        <VictoryGroup offset={5}>
          <VictoryBar
            data={showScores}
            barWidth={3}
            x={'opdracht'}
            y={'moeilijkheid'}
            alignment="start"
            style={{ data: { fill: 'salmon' } }}
          />
          <VictoryBar
            data={showScores}
            x={'opdracht'}
            y={'plezier'}
            style={{ data: { fill: 'cornflowerblue' } }}
          />
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
};

export default StudentChartView;
