import React from 'react'
import { Box, IconButton, Text, Icon } from "@chakra-ui/react";
import { GithubIcon } from "../../assets/icons";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";


// this is the complete top box - contains heading 
export const TopBar = ({ handleSideBarToggle, isSidebarOpen }) => {
  const onToggle = () =>{
    handleSideBarToggle();
  }
  return (
    <Box
      bg='#7f5e4e'
      height="60px"
      width="100%"
      position="fixed"
      top="0"
      zIndex={1000}
      p={4}
      display="flex"
      alignItems="center"
      boxShadow={'2xl'}
       
    >
      <IconButton
        icon={isSidebarOpen ? <CloseIcon /> : <HamburgerIcon />}
        onClick={onToggle}
        bg="transparent"
        _hover={{ bg: "rgba(0,0,0,0.1)" }}
        display={{ sm: "block", md: "none" }}
        color={'white'}
        mr={4}
      />

      <Icon as={GithubIcon} boxSize={5} mr={2} color={'white'}/>
      
      <Text
        as="h2"
        fontSize="lg"
        fontWeight="bold"
        display="inline"
        color='white'
        mt={0}
      >
        Dependabot Alerts
      </Text>
    </Box>
  )
}


