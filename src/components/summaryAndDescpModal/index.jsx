import React from 'react'
import { ModalLayout } from '../../containers'
import { Text, VStack,Box, useTheme, Divider } from '@chakra-ui/react'

export const SummaryAndDescpModal = ({
    isSummandDescpOpen,
    setIsSSummandDescpOpen,
    selectedAlert
}) => {
  const theme = useTheme();
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
                  <Text fontWeight="bold" fontSize={{ base: theme.fonts.lg, md: theme.fonts.xl }} color={theme.colors.black[1000]}>
                    Summary :
                  </Text>
                  <Text fontSize={{ base: "sm", md: "md" }} fontStyle={"italic"}>
                    {selectedAlert.security_advisory.summary}
                  </Text>
                </Box>
                <Divider/>
                <Box>
                  <Text fontWeight="bold" fontSize={{ base: theme.fonts.lg, md: theme.fonts.xl }} color={theme.colors.black[1000]}>
                    Description :
                  </Text>
                  <Text fontSize={{ base: "sm", md: "md" }} fontStyle={"italic"}>
                    {selectedAlert.security_advisory.description}
                  </Text>
                </Box>
              </VStack>
            )}
          </ModalLayout>
    </>
  )
}

