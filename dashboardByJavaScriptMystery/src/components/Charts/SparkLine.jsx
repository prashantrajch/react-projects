import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  return (
    <div>
      {/* <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        dataSource={data}
        xName="x"
        yName="y"
        type={type}
      >
        <Inject services={{ SparklineTooltip }} />
      </SparklineComponent> */}

      <SparkLineChart
        data={data}
        height={height}
        width={width}
        colors={[color]}
        showHighlight={true}
        showTooltip={true}
        plotType={type}
      />
    </div>
  );
};

export default SparkLine;
