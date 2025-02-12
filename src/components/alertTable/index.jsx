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
  Flex,
  Text,
  Box,
  useTheme,
} from "@chakra-ui/react";
import { ViewIcon, CalendarIcon, ChatIcon, EditIcon } from "@chakra-ui/icons";
import { AlertTableButton, Loader } from "../index";
import { getColor } from "../../utils/badgeColors";

export const AlertTable = ({
  alerts,
  setLastElement,
  setSelectedAlert,
  setIsMetaDataOpen,
  setIsTimelineOpen,
  setIsSummandDescpOpen,
  isLoading,
}) => {
  const theme = useTheme();
  // const alertTableWidth = useBreakpointValue({
  //     base: "calc(98%)",
  //     md: "calc(100% - 10%)",
  //     lg: "calc(100% - 5%)",
  //   });
  return (
    <TableContainer
      bg="white"
      rounded="md"
      shadow="lg"
      overflowY="auto"
      overflowX="auto"
      height="max-content"
      w={"77vw"}
      maxH={{ base: "70vh", md: "80vh", lg: "77vh" }} 
    >
      {!isLoading && (!alerts || alerts.length === 0) ? (
        <Flex p={8}>
          <Text fontSize="lg" color="gray.500">
            No alerts found under this category
          </Text>
        </Flex>
      ) : (
        <Table
          variant="interactive"
          size={{ base: "xs", md: "sm", lg: "md" }}
          fontSize={{ base: "xs", md: "sm", lg: "md" }}
   
        >
          <Thead
            bgColor={theme.colors.primary.light}
            position="sticky"
            top={0}
            zIndex={1}
            fontSize={{ base: "xs", md: "sm", lg: "md" }}
          >
            <Tr>
              {/* <Th color="white" textAlign="center" maxW={"3px"} ></Th> */}
              <Th color="white" textAlign="center">View S & D</Th>
              <Th color="white" textAlign="center">Severity</Th>
              <Th color="white" textAlign="center" >Ecosystem</Th>
              <Th color="white" textAlign="center" >Package</Th>
              <Th color="white" textAlign="center">Scope</Th>
              <Th color="white" textAlign="center" colSpan={2}>State</Th>
              <Th color="white" textAlign="center" px={0}>Details</Th>
              <Th color="white" textAlign="center" px={0}>Timeline</Th>
            </Tr>
          </Thead>
          <Tbody>
            <>
              {alerts.map((alert, index) => (
                <Tr
                  key={index}
                  ref={index === alerts.length - 2 ? setLastElement : null}
                >
                  {/* <Td maxW={"3px"} textOverflow={"ellipsis"}>
                    {index + 1}
                  </Td> */}
                  <Td  textAlign={"center"}>
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
                      colorScheme={getColor(
                        "severity",
                        alert.security_advisory.severity
                      )}
                      fontSize="xs"
                    >
                      {alert.security_advisory.severity.toUpperCase()}
                    </Badge>
                  </Td>
                  <Td textAlign={"center"}>{alert.dependency.package.ecosystem.toUpperCase()}</Td>
                  <Td  textAlign={"center"}>{alert.dependency.package.name}</Td>
                  <Td  textAlign={"center"}>{alert.dependency.scope}</Td>
                  <Td textAlign="center" colSpan={2}>
                    <Badge
                      colorScheme={getColor("state", alert.state.toLowerCase())}
                      fontSize={"2xs"}
                      variant={"outline"}
                    >
                      {alert.state}
                    </Badge>
                  </Td>
                  <Td  textAlign={"center"}>
                    <AlertTableButton
                      openModal={setIsMetaDataOpen}
                      label="View Details"
                      setSelectedAlert={setSelectedAlert}
                      buttonVariant="solid"
                      icon={<ViewIcon />}
                      alert={alert}
                    />
                  </Td>
                  <Td  textAlign={"center"}  p={0}>
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
              <Tr>
                <Td  colSpan={8}>
                  {isLoading && (
                    <Box p={4}>
                      <Loader />
                    </Box>
                  )}
                </Td>
              </Tr>
            </>
          </Tbody>
        </Table>
      )}
    </TableContainer>
  );
};
