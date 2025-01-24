import React from 'react'
import { ModalLayout } from '../../containers'
import { Text, VStack,Box } from '@chakra-ui/react'

export const SummaryAndDescpModal = ({
    isSummandDescpOpen,
    setIsSSummandDescpOpen,
    selectedAlert
}) => {
  return (
    <>
       <ModalLayout
            isOpen={isSummandDescpOpen}
            onClose={() => setIsSSummandDescpOpen(false)}
            title="Summary and Description"
          >
            {selectedAlert && (
              <VStack align="stretch" spacing={4}>
                <Box>
                  <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                    Summary :
                  </Text>
                  <Text fontSize={{ base: "sm", md: "md" }}>
                    {selectedAlert.security_advisory.summary}
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                    Description :
                  </Text>
                  <Text fontSize={{ base: "sm", md: "md" }}>
                    {selectedAlert.security_advisory.description}
                  </Text>
                </Box>
              </VStack>
            )}
          </ModalLayout>
    </>
  )
}

