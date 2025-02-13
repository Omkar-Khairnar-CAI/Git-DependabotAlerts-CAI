import React, { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, useTheme, GridItem } from "@chakra-ui/react";
import {getTableData} from '../../utils/dataModel'
import { useNavigate } from "react-router-dom";
import {alerts} from "../../assets/orgData";


export const DashboardTable = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [data, setData] = useState([])

  const getData = ()=>{
    const response = getTableData(alerts);
    setData(response); 
  }

useEffect(()=>{
  getData();
},[])
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
            <Tr key={repo.name}> 
              <Td style={{cursor:'pointer' }} onClick={()=>{
                navigate(`/repos/${repo.name}`, { state: repo.name })
              }}>{repo.name}</Td>
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
