import { Box, Flex, Select, Switch, Text } from "@chakra-ui/react";
import { ResponsiveFunnel } from "@nivo/funnel";
import React, { useState } from "react";
import { ResponsiveContainer } from "recharts";
import { mapToFunnelChartData } from "../../../utils/dataModel";
import { alerts } from "../../../assets/orgData";

export const FunnelChartComponent = ({ height, width }) => {
  const [dir, setDir] = useState("horizontal");
  const [prevDays, setPrevDays] = useState("7");
  const [selectedYear, setSelectedYear] = useState(null);
  const [timeparam, setTimeparam] = useState("created_at");
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 4 }, (_, i) => currentYear - 2 - i);
  const handleOptionChange = (e) => {
    const value = e.target.value;
    if (value === "current") {
      setSelectedYear(null);
      setPrevDays("365");
    } else {
      setSelectedYear(parseInt(value));
      setPrevDays((currentYear - parseInt(value)) * 365);
    }
  };
  const data = mapToFunnelChartData(alerts, prevDays, timeparam, selectedYear);
  //   console.log("funnel data", data);

  return (
    <Box p={4} borderRadius="md" boxShadow="md">
      <Text fontSize="lg" fontWeight="bold">
        Alerts Timeline
      </Text>
      <Flex justifyContent="space-between" alignItems="center" mb={1}>
        <Flex gap={2} width={"100%"} alignItems={"center"}>
          <Select
            value={timeparam || "created_at"}
            onChange={(e) => setTimeparam(e.target.value)}
            width="33%"
            bg="white"
            borderRadius="md"
            boxShadow="sm"
          >
            <option disabled>----Based on----</option>
            <option value="created_at">Created time</option>
            <option value="updated_at">Updated time</option>
            <option value="dismissed_at">Dismissed time</option>
            <option value="fixed_at">Fixed time</option>
          </Select>
          <Select
            value={selectedYear || "current"}
            onChange={handleOptionChange}
            width="25%"
            bg="white"
            borderRadius="md"
            boxShadow="sm"
          >
            <option disabled>---Select the year---</option>
            <option value="current">Current Year</option>
            {yearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </Select>
          <Select
            value={prevDays}
            onChange={(e) => {
              setPrevDays(e.target.value);
              if (e.target.value !== "365") setSelectedYear(null);
            }}
            width="30%"
            bg="white"
            borderRadius="md"
            boxShadow="sm"
            isDisabled={selectedYear !== null}
          >
            <option disabled>--select timeline--</option>
            <option value="7">Last 7 Days</option>
            <option value="28">Last 28 Days</option>
            <option value="90">Last 3 Months</option>
            <option value="180">Last 6 Months</option>
            <option value="365">Last Year</option>
          </Select>
          <Flex alignItems="center" justifyContent="center">
            <Text fontSize="xs" mr={1}>
              Vertical View
            </Text>
            <Switch
              onChange={(e) =>
                setDir(e.target.checked ? "vertical" : "horizontal")
              }
            />
          </Flex>
        </Flex>
      </Flex>

      <ResponsiveContainer width={width} height={height}>
        <ResponsiveFunnel
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          direction={dir}
          shapeBlending={0.7}
          spacing={2}
          valueFormat=">-.1s"
          colors={{ scheme: "pastel1" }}
          borderWidth={8}
          borderOpacity={0.6}
          labelColor={{ from: "color", modifiers: [["darker", 3]] }}
          beforeSeparatorLength={50}
          beforeSeparatorOffset={20}
          afterSeparatorLength={50}
          afterSeparatorOffset={20}
          currentPartSizeExtension={10}
          currentBorderWidth={40}
          motionConfig="molasses"
        />
      </ResponsiveContainer>
    </Box>
  );
};
