import React from "react";
import { Box, IconButton, Text, Icon, Flex, useTheme } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { ToggleButton } from "../../components/index";

// this is the complete top box - contains heading
export const TopBar = ({
  handleSideBarToggle,
  isSidebarOpen,
  isToggled,
  setIsToggled,
}) => {
  const theme = useTheme();
  const onToggle = () => {
    handleSideBarToggle();
  };
  return (
    <Box
      bg={theme.colors.primary.light}
      height="60px"
      width="100%"
      position="fixed"
      top="0"
      zIndex={1500}
      p={4}
      display="flex"
      alignItems="center"
      boxShadow={"xl"}
    >
      <IconButton
        icon={isSidebarOpen ? <CloseIcon /> : <HamburgerIcon />}
        onClick={onToggle}
        bg="transparent"
        _hover={{ bg: "rgba(0,0,0,0.1)" }}
        display={{ sm: "block", md: "none" }}
        color={"white"}
        mr={4}
      />
      <Flex justifyContent="space-between" alignItems="center" width={"100%"}>
        <Text
          as="h2"
          fontSize="lg"
          fontWeight="bold"
          display="flex"
          color="white"
          alignItems={"center"}
          justifyContent={"center"}
          mt={0}
        >
          <Box boxSize={12} mr={2}>
            <img
              src="https://www.caistack.com/images/logo/CAIStack_logo.svg"
              alt=""
            />
          </Box>

          {import.meta.env.VITE_ORGANIZATION_NAME}
        </Text>

        {/* //toggle  */}
        <Box>
          <ToggleButton isToggled={isToggled} setIsToggled={setIsToggled} />
        </Box>
      </Flex>
    </Box>
  );
};
