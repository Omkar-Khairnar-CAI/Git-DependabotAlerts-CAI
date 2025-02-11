import { Box } from '@chakra-ui/react';
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const LineChartComponent = (props) => {
const {data, height, width, margin, } = props
  return (
    <div>
      <Box>Heading</Box>
      <ResponsiveContainer width={width} height={height}>
       <LineChart
          data={data}
          margin={{
            top: margin?.top || 10,
            right: margin?.right || 30,
            left: margin?.left || 20,
            bottom: margin?.bottom || 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        </ResponsiveContainer>
    </div>
  )
}


