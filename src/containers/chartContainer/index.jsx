import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import {
  StackedBarChart,
  PieChartComponent,
  ScatterChartComponent,
  LineChartComponent,
} from "../../components/charts";

export const ChartContainer = () => {
  const stackedBarChartData = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const pieChartData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const pieChartColors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const lineChartData = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={4}
      width="90%"
      marginTop="5%"
      marginX="5%"
    >
      <Box border="1px solid #ccc" borderRadius="md" p={3}>
        <StackedBarChart data={stackedBarChartData} height={260} width={600} />
      </Box>
      <Box border="1px solid #ccc" borderRadius="md" p={3}>
        <LineChartComponent data={lineChartData} height={260} width={600} />
      </Box>
      <Box border="1px solid #ccc" borderRadius="md" p={3}>
        <ScatterChartComponent height={260} width={600} />
      </Box>
      <Box border="1px solid #ccc" borderRadius="md" p={3}>
        <PieChartComponent
          data={pieChartData}
          height={260}
          width={400}
          radius={100}
          colors={pieChartColors}
        />
      </Box>
    </SimpleGrid>
  );
};
