import React from "react";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";

const SparklineAreaData = [1, 2, 2, 6, 3, 8, 4, 5, 5, 10];

const SparkLineCharts = () => {
  return (
    <div>
      <SparkLineChart
        data={SparklineAreaData}
        height={80}
        showHighlight={true}
        showTooltip={true}
        width={250}
      />
    </div>
  );
};

export default SparkLineCharts;
