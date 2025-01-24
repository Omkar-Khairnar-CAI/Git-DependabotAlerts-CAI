import { Box } from "@chakra-ui/react";
import React from "react";

export const SideBarItem = ({ repo, currentActiveRepo, handleItemClick }) => {
  return (
    <div>
      <Box
        mb={4}
        p={2}
        bg={currentActiveRepo === repo.name ? "#8f6d4d" : ""}
        onClick={() => handleItemClick(repo)}
        borderRadius="md"
        boxShadow={currentActiveRepo === repo.name ? "lg" : "sm"}
        color={currentActiveRepo === repo.name ? "white" : "black"}
        _hover={{
          bg: currentActiveRepo === repo.name ? "#9f6d4d" : "#EAE2C6", 
          cursor: "pointer", 
        }}
      >
        <p>{repo.name}</p>
      </Box>
    </div>
  );
};
