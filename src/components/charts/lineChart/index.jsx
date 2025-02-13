import {
  Box,
  Flex,
  Input,
  NumberInput,
  NumberInputField,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { mapToLineChartData } from "../../../utils/dataModel";
import { alerts } from "../../../assets/orgData";

export const LineChartComponent = ({ height, width, margin }) => {
  const [selectedYear, setSelectedYear] = useState(2023);
  // Transform alert data for the line chart
  const lineChartData = mapToLineChartData(alerts, "ecosystem", selectedYear);
  // console.log("Data @ line chart", lineChartData);

  return (
    <>
      <Box>
        <Flex justify="space-between" align="center" mb={4} width={width}>
          <Text fontSize="lg" fontWeight="bold">
            Alerts Trend - {selectedYear}
          </Text>
          <Input
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            min={2016}
            max={2025}
            w="200px"
            size="md"
            placeholder="Choose the year"
            type="number"
          />
        </Flex>
      </Box>
      <ResponsiveContainer width={width} height={height}>
        <LineChart
          data={lineChartData}
          margin={{
            top: margin?.top || 10,
            right: margin?.right || 30,
            left: margin?.left || 20,
            bottom: margin?.bottom || 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="low" stroke="#82ca9d" />
          <Line type="monotone" dataKey="medium" stroke="#8884d8" />
          <Line type="monotone" dataKey="high" stroke="#ffcc00" />
          <Line type="monotone" dataKey="critical" stroke="#ff0000" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
