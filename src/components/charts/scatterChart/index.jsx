import { Box } from '@chakra-ui/react';
import { CartesianGrid, Legend, Scatter, ScatterChart, XAxis, YAxis, ZAxis , Tooltip, ResponsiveContainer} from 'recharts';
export const ScatterChartComponent = (props) => {
  const {height, width} = props;
  const data01 = [
    {
      "x": 100,
      "y": 200,
      "z": 200
    },
    {
      "x": 120,
      "y": 100,
      "z": 260
    },
    {
      "x": 170,
      "y": 300,
      "z": 400
    },
    {
      "x": 140,
      "y": 250,
      "z": 280
    },
    {
      "x": 150,
      "y": 400,
      "z": 500
    },
    {
      "x": 110,
      "y": 280,
      "z": 200
    }
  ];
  const data02 = [
    {
      "x": 200,
      "y": 260,
      "z": 240
    },
    {
      "x": 240,
      "y": 290,
      "z": 220
    },
    {
      "x": 190,
      "y": 290,
      "z": 250
    },
    {
      "x": 198,
      "y": 250,
      "z": 210
    },
    {
      "x": 180,
      "y": 280,
      "z": 260
    },
    {
      "x": 210,
      "y": 220,
      "z": 230
    }
  ];
  const data03 = [
    {
      "x": 120,
      "y": 200,
      "z": 340
    },
    {
      "x": 400,
      "y": 300,
      "z": 500
    },
    {
      "x": 300,
      "y": 330,
      "z": 400
    },
    {
      "x": 340,
      "y": 350,
      "z": 450
    },
    {
      "x": 335,
      "y": 290,
      "z": 400
    },
    {
      "x": 330,
      "y": 304,
      "z": 415
    }
  ];
  const data04 = [
    {
      "x": 450,
      "y": 270,
      "z": 220
    },
    {
      "x": 470,
      "y": 220,
      "z": 200
    },
    {
      "x": 430,
      "y": 220,
      "z": 260
    },
    {
      "x": 450,
      "y": 290,
      "z": 240
    },
    {
      "x": 445,
      "y": 320,
      "z": 240
    },
    {
      "x": 430,
      "y": 180,
      "z": 230
    }
  ];
      
  
                              
  return (
    <>
    <Box>Heading</Box>
      <ScatterChart
        width={width}
        height={height}
        margin={{
          top: 10,
          right: 20,
          bottom: 10,
          left: 10,
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" type="number" name="updated At" unit="cm" />
        <YAxis dataKey="y" type="number" name="frequency" unit="kg" />
        <ZAxis dataKey="z" type="number" range={[64, 144]} name="created At" unit="km" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />
        <Scatter name="Low" data={data01} fill="#8884d8" />
        <Scatter name="Medium" data={data02} fill="#82ca9d" />
        <Scatter name="High" data={data03} fill="#DA0100" />
        <Scatter name="Critical" data={data04} fill="#FFA500" />
      </ScatterChart>
      </>
  )
}

