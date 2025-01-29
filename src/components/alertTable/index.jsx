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
  return (
    <TableContainer
      bg="white"
      rounded="md"
      shadow="lg"
      overflowY="auto"
      overflowX="auto"
      height="max-content"
      
      maxH={{ base: "70vh", md: "80vh", lg: "77vh" }} // Responsive height for the table container
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
          width="100%"
        >
          <Thead
            bgColor={theme.colors.primary.light}
            position="sticky"
            top={0}
            zIndex={1}
            fontSize={{ base: "xs", md: "sm", lg: "md" }}
          >
            <Tr>
              <Th color="white">View S & D</Th>
              <Th color="white">Severity</Th>
              <Th color="white">Ecosystem</Th>
              <Th color="white">Package</Th>
              <Th color="white">Scope</Th>
              <Th color="white">State</Th>
              <Th color="white">Details</Th>
              <Th color="white">Timeline</Th>
            </Tr>
          </Thead>
          <Tbody>
            <>
              {alerts.map((alert, index) => (
                <Tr
                  key={index}
                  ref={index === alerts.length - 2 ? setLastElement : null}
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
                      colorScheme={getColor(
                        "severity",
                        alert.security_advisory.severity
                      )}
                      fontSize="xs"
                    >
                      {alert.security_advisory.severity.toUpperCase()}
                    </Badge>
                  </Td>
                  <Td>{alert.dependency.package.ecosystem.toUpperCase()}</Td>
                  <Td>{alert.dependency.package.name}</Td>
                  <Td>{alert.dependency.scope}</Td>
                  <Td>
                    <Badge
                      colorScheme={getColor("state", alert.state.toLowerCase())}
                      fontSize={{ base: "xs", md: "sm", lg: "md" }}
                      variant={"outline"}
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
