import React from 'react';
import { VStack, Box, Text, HStack, Divider } from '@chakra-ui/react';
import { ModalLayout } from '../../containers/modalLayout';

export const TimelineModal = ({ isTimelineOpen, setIsTimelineOpen, selectedAlert }) => {
  return (
    <ModalLayout
      isOpen={isTimelineOpen}
      onClose={() => setIsTimelineOpen(false)}
      title="Alert Timeline"
    >
      {selectedAlert && (
        <HStack align="stretch" justify={"space-evenly"}>
          <Box>
            <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>Published from</Text>
            <Text fontSize={{ base: "sm", md: "md" }}>
              {new Date(selectedAlert.security_advisory.published_at).toLocaleDateString()} 
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>Last Updated on</Text>
            <Text fontSize={{ base: "sm", md: "md" }}>
              {new Date(selectedAlert.security_advisory.updated_at).toLocaleDateString()}
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>Fixed on</Text>
            <Text fontSize={{ base: "sm", md: "md" }}>
              {selectedAlert.fixed_at ? new Date(selectedAlert.fixed_at).toLocaleDateString() : 'Not fixed'}
            </Text>
          </Box>
        </HStack>
      )}
    </ModalLayout>
  );
};

