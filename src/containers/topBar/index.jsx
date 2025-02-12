import React from "react";
import { Box, IconButton, Text, Icon, Flex, useTheme } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { ToggleButton } from "../../components/index";
import { Link, useLocation } from "react-router-dom";

// this is the complete top box - contains heading
export const TopBar = ({
  handleSideBarToggle,
  isSidebarOpen,
  isToggled,
  setIsToggled,
  currentActiveRepo,
}) => {
  const theme = useTheme();
  const location = useLocation();
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
      <Flex width={"100%"}>
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

        <Box
          position="absolute"
          left="45%"
          top={5}
          color="white"
          fontSize="lg"
          fontWeight="bold"
          display="flex"
          gap={4} 
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              transition: "color 0.3s",
            }}
          >
            Dashboard
          </Link>
          <Link
            to="/repos"
            style={{
              textDecoration: "none",
              color: "white",
              transition: "color 0.3s",
            }}
          >
            Repos
          </Link>
        </Box>

        {location.pathname.split("/")[1] === "repos" && (
          <Box position={"absolute"} right={10} top={2}>
            <ToggleButton isToggled={isToggled} setIsToggled={setIsToggled} />
          </Box>
        )}
      </Flex>
    </Box>
  );
};
