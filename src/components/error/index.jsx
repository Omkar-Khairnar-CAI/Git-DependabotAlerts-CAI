import { Box, Text } from '@chakra-ui/react';
import React from 'react';

export const index = ({ message }) => {
  return (
    <Box
      padding="20px"
      textAlign="center"
      color="#666"
      fontSize="18px"
      fontWeight="bold"
    >
      <Text color="red" fontSize="18px" fontWeight="bold">
        Error:
      </Text>
        {message}
    </Box>
  );
};

