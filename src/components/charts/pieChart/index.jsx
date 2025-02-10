import { Box } from "@chakra-ui/react";
import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from "recharts";

export const PieChartComponent = (props) => {
  const { data, colors, height, width, radius, margin } = props;

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div>
      <Box>Heading</Box>
      <PieChart width={width} height={height}>
        <Pie
          data={data}
          cx="70%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={radius}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip/>
      </PieChart>
    </div>
  );
};
