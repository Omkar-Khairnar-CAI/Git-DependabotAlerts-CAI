import { Box } from "@chakra-ui/react";
import {
  CartesianGrid,
  Legend,
  Scatter,
  ScatterChart,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { mapToGraphData } from "../../../utils/dataModel";
import { alerts } from "../../../assets/orgData";

export const ScatterChartComponent = ({ height, width }) => {
  const data01 = mapToGraphData(
    alerts,
    "cvss_v3_score",
    "cvss_v4_score",
    "cvss_score"
  );
  return (
    <>
      <Box>Heading</Box>
      <ResponsiveContainer width={width} height={height}>
        <ScatterChart
          width={700}
          height={250}
          margin={{
            top: 10,
            right: 20,
            bottom: 10,
            left: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          {/* X and Y axis are mandatory needed */}
          <XAxis dataKey="x" type="number" name="cvss v3_score" unit="" />
          <YAxis dataKey="y" type="number" name="cvss_score" unit="" />
          <ZAxis dataKey="z" type="number" name="cvss v4_score" unit="" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Legend />
          <Scatter name="Low" data={data01} fill="#8884d8" />
          {/* <Scatter name="Medium" data={data02} fill="#82ca9d" />
        <Scatter name="High" data={data03} fill="#DA0100" />
        <Scatter name="Critical" data={data04} fill="#FFA500" /> */}
        </ScatterChart>
      </ResponsiveContainer>
    </>
  );
};
