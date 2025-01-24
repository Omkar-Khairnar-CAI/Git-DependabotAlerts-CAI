import React from "react";
import { Box, VStack, Text } from "@chakra-ui/react";
import { ModalLayout } from "../../containers/index";

export const DetailsModal = ({
  isMetaDataOpen,
  setIsMetaDataOpen,
  selectedAlert,
}) => {
  return (
    <ModalLayout
      isOpen={isMetaDataOpen}
      onClose={() => setIsMetaDataOpen(false)}
      title="Security Advisory Details"
    >
      {selectedAlert && (
        <VStack align="stretch" spacing={4} size={{ base: "xs", md: "sm", lg: "md" }}>
          <Box>
            <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
              GHSA ID
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }}>
              {selectedAlert.security_advisory.ghsa_id}
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
              CVE ID
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }}>
              {selectedAlert.security_advisory.cve_id}
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
              Package
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }}>
              {selectedAlert.dependency.package.ecosystem}/
              {selectedAlert.dependency.package.name}
            </Text>
          </Box>
        </VStack>
      )}
    </ModalLayout>
  );
};
