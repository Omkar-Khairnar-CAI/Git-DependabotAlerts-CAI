import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Box, Flex, Select, Text } from "@chakra-ui/react";
import { mapToStackedBarChartData } from "../../../utils/dataModel";
import { alerts } from "../../../assets/orgData";

export const StackedBarChart = (props) => {
  const { height, width, margin, XAxisKey, YAxisKey } = props;
  const [param, setParam] = useState("ecosystem");

  const stackedBarChartData = mapToStackedBarChartData(alerts, param);

  return (
    <>
      <Flex align={"center"} justify={"space-between"} my={1}>
        <Box>Heading</Box>
        <Select
          value={param}
          onChange={(e) => setParam(e.target.value)}
          width={"30%"}
        >
          <option value="ecosystem">Ecosystem</option>
          <option value="state">State</option>
          <option value="package_name">Package Name</option>
          <option value="scope">Scope</option>
          <option value="repository_name">Repository</option>
        </Select>
      </Flex>
      <ResponsiveContainer
        width={width}
        height={height}
        margin={{
          top: margin?.top || 0,
          right: margin?.right || 0,
          left: margin?.left || 0,
          bottom: margin?.bottom || 0,
        }}
      >
        <BarChart data={stackedBarChartData}>
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="low" stackId="a" fill="#82ca9d" />
          <Bar dataKey="medium" stackId="a" fill="#ffc658" />
          <Bar dataKey="high" stackId="a" fill="#ff7300" />
          <Bar dataKey="critical" stackId="a" fill="#d32f2f" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
