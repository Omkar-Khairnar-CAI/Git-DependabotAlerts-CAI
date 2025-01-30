import React from "react";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Badge,
  Button,
  Tooltip,
  Flex,
  Spinner,
  Text,
  Center
} from "@chakra-ui/react";
import { ViewIcon, CalendarIcon, ChatIcon, EditIcon } from "@chakra-ui/icons";
import { AlertTableButton } from "../index";
import { getColor } from "../../utils/badgeColors";

export const AlertTable = ({
  alerts,
  setLastElement,
  setSelectedAlert,
  setIsMetaDataOpen,
  setIsTimelineOpen,
  setIsSummandDescpOpen,
  pageNum,
  loading,
}) => {
  return (
    <TableContainer
      bg="white"
      rounded="md"
      shadow="lg"
      overflowY="auto"
      overflowX="auto"
      m={{ base: 2, md: 0, lg: 0 }}
      height={{ base: "80vh", md: "80vh", lg: "77vh" }} // Fixed height for different sizes
      width={{ base: "100vw", sm : "100vw", md: "100%" }}
    >
      {(!loading && (!alerts || alerts.length === 0)) ? (
        <Flex p={8}>
          <Text fontSize="lg" color="gray.500">
            No alerts found under this category
          </Text>
        </Flex>
      ) : (
        <Table variant="striped" size={{ base: "xs", md: "sm", lg: "md" }} fontSize={{ base: "xs", md: "sm", lg: "md" }} width="100%" minWidth="600px">
          <Thead
            bgColor={"#9f6d4d"}
            position="sticky"
            top={0}
            zIndex={1}
            fontSize={{ base: "sm", md: "sm", lg: "md" }}
            size={{ base: "md", md: "sm", lg: "md" }}
          >
            <Tr>
              <Th color="white" textAlign="center" minW="60px" ></Th>
              <Th color="white" textAlign="center" minW="80px">View S & D</Th>
              <Th color="white" textAlign="center" minW="80px">Severity</Th>
              <Th color="white" textAlign="center" minW="80px" >Ecosystem</Th>
              <Th color="white" textAlign="center" minW="80px" >Package</Th>
              <Th color="white" textAlign="center" minW="80px">Scope</Th>
              <Th color="white" textAlign="center" width="120px"minW="80px" >State</Th>
              <Th color="white" textAlign="center" minW="80px">Details</Th>
              <Th color="white" textAlign="center" minW="80px">Timeline</Th>
            </Tr>
          </Thead>
          <Tbody>
            <>
              {alerts.map((alert, index) => {
                console.log("rendered alert ", index);
                return (
                  <Tr
                    key={index}
                    ref={index === alerts.length - 1 ? setLastElement : null}
                  >
                    <Td>{index}</Td>
                    <Td textAlign="center">
                      <AlertTableButton
                        openModal={setIsSummandDescpOpen}
                        label="View Summary and Descp"
                        setSelectedAlert={setSelectedAlert}
                        buttonVariant="link"
                        icon={<EditIcon />}
                        alert={alert}
                      />
                    </Td>
                    <Td textAlign="center">
                      <Badge
                        colorScheme={getColor("severity", alert.security_advisory.severity)}
                        fontSize="xs"
                      >
                        {alert.security_advisory.severity.toUpperCase()}
                      </Badge>
                    </Td>
                    <Td textAlign="center">{alert.dependency.package.ecosystem.toUpperCase()}</Td>
                    <Td textAlign="center">{alert.dependency.package.name}</Td>
                    <Td textAlign="center">{alert.dependency.scope}</Td>
                    <Td textAlign="center" width="120px">
                      <Badge
                        colorScheme={getColor("state", alert.state.toLowerCase())}
                        fontSize="xs"
                        variant={'outline'}
                      >
                        {alert.state}
                      </Badge>
                    </Td>
                    <Td textAlign="center">
                      <AlertTableButton
                        openModal={setIsMetaDataOpen}
                        label="View Details"
                        setSelectedAlert={setSelectedAlert}
                        buttonVariant="solid"
                        icon={<ViewIcon />}
                        alert={alert}
                      />
                    </Td>
                    <Td textAlign="center">
                      <AlertTableButton
                        openModal={setIsTimelineOpen}
                        label="View Timeline"
                        setSelectedAlert={setSelectedAlert}
                        buttonVariant="solid"
                        icon={<CalendarIcon />}
                        alert={alert}
                      />
                    </Td>
                  </Tr>
                );
              })}
            </>
          </Tbody>
        </Table>
      )}
    </TableContainer>
  );
};