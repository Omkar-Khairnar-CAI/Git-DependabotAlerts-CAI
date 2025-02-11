import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, useTheme } from "@chakra-ui/react";

const data=[
  {name:'dummy1', totalAlerts:'20', critical:'10', low:'5', medium:'5', high:'10', lastUpdated:'12/12/2024'},
  {name:'dummy2', totalAlerts:'20', critical:'10', low:'5', medium:'5', high:'10', lastUpdated:'12/12/2024'},
  {name:'dummy3', totalAlerts:'20', critical:'10', low:'5', medium:'5', high:'10', lastUpdated:'12/12/2024'},
  {name:'dummy4', totalAlerts:'20', critical:'10', low:'5', medium:'5', high:'10', lastUpdated:'12/12/2024'},
  {name:'dummy5', totalAlerts:'20', critical:'10', low:'5', medium:'5', high:'10', lastUpdated:'12/12/2024'},
]
export const DashboardTable = ({  }) => {
  const theme = useTheme();
  
  return (
    <TableContainer
      width="90%"
      marginX="auto"
      marginTop="3%"
      border="1px solid black"
      p={3}
      marginBottom="2%"
      bg="gray.50"
    >
      <Table size="sm" variant="simple" bg="white">
        <Thead bg={theme.colors.primary?.lighter || "gray.200"}>
          <Tr>
            <Th>Repo Name</Th>
            <Th >Total Alerts</Th>
            <Th >Critical</Th>
            <Th >High</Th>
            <Th >Medium</Th>
            <Th >Low</Th>
            <Th>Last Updated</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((repo) => (
            <Tr key={repo.id}>
              <a href={`./${repo.name }`} >
              <Td style={{cursor:'pointer' }}>{repo.name}</Td>
              </a>
              <Td >{repo.totalAlerts}</Td>
              <Td >{repo.critical}</Td>
              <Td >{repo.high}</Td>
              <Td >{repo.medium}</Td>
              <Td >{repo.low}</Td>
              <Td>{new Date(repo.lastUpdated).toLocaleString()}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
