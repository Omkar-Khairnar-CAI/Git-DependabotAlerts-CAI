import { Box, useTheme } from "@chakra-ui/react";
import React from "react";

export const SideBarItem = ({ repo, currentActiveRepo, handleItemClick }) => {
  const theme = useTheme();
  return (
    <div>
      <Box
        mb={4}
        p={2}
        width={'100%'}
        bg={currentActiveRepo === repo.name ? theme.colors.primary.main : ""}
        onClick={() => handleItemClick(repo)}
        borderRadius="md"
        textOverflow="ellipsis"
        boxShadow={currentActiveRepo === repo.name ? "lg" : "sm"}
        color={currentActiveRepo === repo.name ? "white" : "black"}
        _hover={{
          bg: theme.colors.primary.light, 
          cursor: "pointer", 
        }}
      >
        <p>{repo.name}</p>
      </Box>
    </div>
  );
};
