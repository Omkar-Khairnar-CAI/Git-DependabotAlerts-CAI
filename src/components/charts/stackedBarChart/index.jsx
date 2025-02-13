import { Box, Flex, Select } from "@chakra-ui/react";
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
import { mapToStackedBarChartData2 } from "../../../utils/dataModel";
import { alerts } from "../../../assets/orgData";

export const StackedBarChart = ({ height, width, margin }) => {
  const [param, setParam] = useState("ecosystem");

  // Define possible values for each parameter
  const possibleValuesMap = {
    state: ["auto_dismissed", "dismissed", "fixed", "open"],
    severity: ["low", "medium", "high", "critical"],
    ecosystem: [
      "composer",
      "go",
      "maven",
      "npm",
      "nuget",
      "pip",
      "pub",
      "rubygems",
      "rust",
    ],
    scope: ["development", "runtime"],
  };

  // Get possible values dynamically based on `param`
  const possibleValues = possibleValuesMap[param] || [];

  const stackedBarChartData = mapToStackedBarChartData2(alerts, param);

  const colorScheme = ["#82ca9d", "#ffc658", "#ff7300", "#d32f2f", "#8884d8"];

  return (
    <>
      <Flex align={"center"} justify={"space-between"} my={2}>
        <Box fontSize="lg" fontWeight="bold">
          Alerts Breakdown by {param}
        </Box>
        <Select
          value={param}
          onChange={(e) => setParam(e.target.value)}
          width={"30%"}
        >
          <option value="ecosystem">Ecosystem</option>
          <option value="state">State</option>
          <option value="scope">Scope</option>
          <option value="severity">Severity</option>
        </Select>
      </Flex>

      <ResponsiveContainer width={width} height={height}>
        <BarChart data={stackedBarChartData} margin={margin}>
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="repository" />
          <YAxis />
          <Tooltip />
          <Legend iconType="circle" />

          {/* Dynamically render <Bar> components based on possible values */}
          {possibleValues.map((key, index) => (
            <Bar
              key={key}
              dataKey={key}
              stackId="a"
              fill={colorScheme[index % colorScheme.length]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
