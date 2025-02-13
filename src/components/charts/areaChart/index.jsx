import { Flex, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { mapToAreaChartData } from "../../../utils/dataModel";
import { alerts } from "../../../assets/orgData";

export const AreaChartComponent = ({ height, width, margin }) => {
  const [topRepoCount, setTopRepoCount] = useState(3);

  const data = mapToAreaChartData(alerts, topRepoCount);

  const colors = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff7300",
    "#387908",
    "#ffbb28",
    "#ff8042",
    "#0088fe",
    "#00c49f",
    "#ff0000",
  ];

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" mb={1}>
        <Text fontSize="lg" fontWeight="bold">
          Monthly Trend of Top {topRepoCount} repos
        </Text>
        <Select
          value={topRepoCount}
          onChange={(e) => setTopRepoCount(e.target.value)}
          width="33%"
          bg="white"
          borderRadius="md"
          boxShadow="sm"
        >
          <option value={3}>Top 3 Repos</option>
          <option value={5}>Top 5 Repos</option>
          <option value={10}>Top 10 Repos</option>
        </Select>
      </Flex>
      <ResponsiveContainer width={width} height={height}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          stackOffset="expand"
        >
          <defs>
            {data.length > 0 &&
              Object.keys(data[0])
                .filter((key) => key !== "name")
                .map((repo, index) => (
                  <linearGradient
                    key={repo}
                    id={`color${repo}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor={colors[index % colors.length]}
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor={colors[index % colors.length]}
                      stopOpacity={0}
                    />
                  </linearGradient>
                ))}
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          {data.length > 0 &&
            Object.keys(data[0])
              .filter((key) => key !== "name")
              .map((repo, index) => (
                <Area
                  key={repo}
                  type="monotone"
                  dataKey={repo}
                  stroke={colors[index % colors.length]}
                  fillOpacity={1}
                  fill={`url(#color${repo})`}
                />
              ))}
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};
