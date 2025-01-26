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
  const getSeverityColor = (severity) => {
    const colors = {
      critical: "purple",
      high: "red",
      medium: "orange",
      low: "green",
    };
    return colors[severity] || "gray";
  };
  

  return (
    <TableContainer
      bg="white"
      rounded="md"
      shadow="lg"
      overflowY="auto"
      maxH="70vh"
      
    >
      {(!loading && (!alerts || alerts.length === 0)) ? (
        <Flex p={8}>
        <Text fontSize="lg" color="gray.500">
          No alerts found under this category
        </Text>
      </Flex>) : (
      <Table variant="striped" size={{ base: "xs", md: "sm", lg: "md" }} fontSize={{ base: "xs", md: "sm", lg: "md" }} >
        <Thead bgColor={"teal.200"} 
          position="sticky"
          top={0}
          zIndex={1}
        >
          <Tr>
            <Th>View S & D</Th>
            <Th>Severity</Th>
            <Th>Ecosystem</Th>
            <Th>Package</Th>
            <Th>Scope</Th>
            <Th>State</Th>
            <Th>Details</Th>
            <Th>Timeline</Th>
          </Tr>
        </Thead>
        <Tbody>
          {/* { loading ? (// && pageNum === 1 ? (
            <Tr >
            <Center w="100%" h="100%" aspectRatio={1} direction={"column"} justifyContent="center" alignItems="center" marginLeft={"50%"}>
              <Spinner size="xl" color="teal.200" emptyColor="teal.600" />
            </Center>
            </Tr>
              
          ) : ( */}
            <>
              {alerts.map((alert, index) => (
                <Tr
                  key={index}
                  ref={index === alerts.length - 1 ? setLastElement : null}
                >
                  <Td>
                    <AlertTableButton
                      openModal={setIsSummandDescpOpen}
                      label="View Summary and Descp"
                      setSelectedAlert={setSelectedAlert}
                      buttonVariant="link"
                      icon={<EditIcon />}
                      alert={alert} 
                    />
                  </Td>
                  <Td>
                    <Badge
                      colorScheme={getSeverityColor(
                        alert.security_advisory.severity
                      )}
                      fontSize="xs"
                      // {{ base: "xs", md: "sm", lg: "md" }}
                    >
                      {alert.security_advisory.severity.toUpperCase()}
                    </Badge>
                  </Td>
                  <Td>{alert.dependency.package.ecosystem.toUpperCase()}</Td>
                  <Td>{alert.dependency.package.name}</Td>
                  <Td>{alert.dependency.scope}</Td>
                  <Td>
                    <Badge
                      colorScheme={
                        alert.state === "open"
                          ? "red"
                          : alert.state === "fixed"
                          ? "green"
                          : "gray"
                      }
                      fontSize={{ base: "xs", md: "sm", lg: "md" }}
                      variant={'outline'}
                    >
                      {alert.state}
                    </Badge>
                  </Td>
                  <Td>
                    <AlertTableButton
                      openModal={setIsMetaDataOpen}
                      label="View Details"
                      setSelectedAlert={setSelectedAlert}
                      buttonVariant="solid"
                      icon={<ViewIcon />}
                      alert={alert}  
                    />
                  </Td>
                  <Td>
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
              ))}
            </>
          {/* )} */}
        </Tbody>
      </Table>
      )}
    </TableContainer>
  );
};
