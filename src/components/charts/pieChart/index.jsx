import { Box, Select, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { mapPieChartData } from "../../../utils/dataModel";
import { alerts } from "../../../assets/orgData";

export const PieChartComponent = (props) => {
  const { colors, height, width, radius, margin } = props;
  const [param, setParam] = useState("ecosystem");
  const [data, setData] = useState([]);

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

  const getData = () => {
    const response = mapPieChartData(alerts, param);
    setData(response);
  };

  useEffect(() => {
    getData();
  }, [param]);

  return (
    <div>
      <Flex align={"center"} justify={"space-between"}>
        <Box fontSize="lg" fontWeight="bold">
          Distribution ratio for {param}
        </Box>
        <Select
          value={param}
          onChange={(e) => setParam(e.target.value)}
          width={"30%"}
        >
          <option value="ecosystem">Ecosystem</option>
          <option value="state">State</option>
          <option value="package_name">Package Name</option>
          <option value="scope">Scope</option>
        </Select>
      </Flex>
      <ResponsiveContainer width={width} height={height}>
        <PieChart width={width} height={height}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={radius}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            wrapperStyle={{ paddingTop: "10px" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
