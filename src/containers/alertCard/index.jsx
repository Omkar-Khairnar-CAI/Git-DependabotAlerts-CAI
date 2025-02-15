import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  HStack,
  VStack,
  Table,
  Tbody,
  Tr,
  Td,
  Badge,
  useBreakpointValue,
  useTheme,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { BadgeComponent } from "../../components/index";

export const AlertCard = ({ alert }) => {
  const theme = useTheme()
  const {
    security_vulnerability: {
      severity,
      vulnerable_version_range,
      first_patched_version,
    },
    dependency: {
      package: { ecosystem },
    },
    security_advisory: { summary, description, cve_id, ghsa_id },
    state,
    created_at,
    updated_at,
    dismissed_at,
    dismissed_by,
    dismissed_comment,
    dismissed_reason,
  } = alert;

  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => setIsOpen(!isOpen);

  const descriptionSize = useBreakpointValue({
    base: 100,
    md: 250,
    lg: 300,
  });

  return (
    <Box
      p={5}
      shadow="md"
      width={'99%'}
      borderWidth="1px"
      borderRadius="md"
      cursor="pointer"
      bg="white"
      _hover={{bg:theme.colors.primary.lightest}}
      onClick={onToggle}
    >
      <HStack justify="space-between" align="flex-start">
        <VStack align="start" spacing={2} flex="1">
          <Text fontSize="lg" fontWeight="bold">
            {summary}
          </Text>
          <Text
            fontSize="sm"
            noOfLines={isOpen ? undefined : 1}
            color="gray.600"
          >
            {description.slice(0, descriptionSize)}{" "}
            {description.length > descriptionSize && !isOpen && "..."}
          </Text>
          <HStack>
            <BadgeComponent type="severity" value={severity} />
            <BadgeComponent type="state" value={state} variant={"outline"} />
            <BadgeComponent
              type="ecosystem"
              value={ecosystem}
              variant={"subtle"}
            />
          </HStack>
        </VStack>
        <Box>
          {isOpen ? (
            <ChevronUpIcon boxSize={6} color="gray.500" />
          ) : (
            <ChevronDownIcon boxSize={6} color="gray.500" />
          )}
        </Box>
      </HStack>

      <Box
        overflow="hidden"
        transition="all 0.5s ease"
        maxHeight={isOpen ? "1000px" : "0"}
        opacity={isOpen ? 1 : 0}
      >
        <Table variant="simple" size="sm" mt={3}>
          <Tbody>
            <Tr>
              <Td fontWeight="bold">CVE ID</Td>
              <Td>{cve_id}</Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">GHSA ID</Td>
              <Td>{ghsa_id}</Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">Vulnerable Version Range</Td>
              <Td>{vulnerable_version_range}</Td>
            </Tr>
            {first_patched_version && (
              <Tr>
                <Td fontWeight="bold">First Patched Version</Td>
                <Td>{first_patched_version.identifier}</Td>
              </Tr>
            )}
            <Tr>
              <Td fontWeight="bold">Alert State</Td>
              <Td>
                <Badge
                  colorScheme={
                    state === "dismissed"
                      ? "gray"
                      : state === "fixed"
                      ? "green"
                      : "red"
                  }
                >
                  {state}
                </Badge>
              </Td>
            </Tr>

            {state === "dismissed" && (
              <>
                <Tr>
                  <Td fontWeight="bold">Dismissed At</Td>
                  <Td>{new Date(dismissed_at).toLocaleString()}</Td>
                </Tr>
                <Tr>
                  <Td fontWeight="bold">Dismissed By</Td>
                  <Td>{dismissed_by}</Td>
                </Tr>
                <Tr>
                  <Td fontWeight="bold">Dismissed Comment</Td>
                  <Td>{dismissed_comment}</Td>
                </Tr>
                <Tr>
                  <Td fontWeight="bold">Dismissed Reason</Td>
                  <Td>{dismissed_reason}</Td>
                </Tr>
              </>
            )}

            <Tr>
              <Td fontWeight="bold">Created At</Td>
              <Td>{new Date(created_at).toLocaleString()}</Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">Last Updated At</Td>
              <Td>{new Date(updated_at).toLocaleString()}</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};
