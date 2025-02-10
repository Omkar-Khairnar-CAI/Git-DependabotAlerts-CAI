import { Box } from '@chakra-ui/react';
import React, { useEffect, PureComponent } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const StackedBarChart  = (props) => {
  const {data, height, width, margin, XAxisKey, YAxisKey } = props

  return (
   <>
    <Box >Heading</Box>
        <BarChart
          width={width}
          height={height}
          data={data}
          margin={{
            top: margin?.top || 10,
            right: margin?.right || 0,
            left: margin?.left || 0,
            bottom: margin?.bottom || 0,
          }}
        >
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
        </BarChart>
    

   
   </>
  )
}

