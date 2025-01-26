import React from 'react'
import { Box, IconButton, Text, Icon, Flex } from "@chakra-ui/react";
import { GithubIcon } from "../../assets/icons";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { ToggleButton } from '../../components/index';


// this is the complete top box - contains heading 
export const TopBar = ({ handleSideBarToggle, isSidebarOpen, isToggled, setIsToggled }) => {
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
      zIndex={1500}
      p={4}
      display="flex"
      alignItems="center"
      boxShadow={'xl'}
       
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
      <Flex justifyContent="space-between" alignItems="center"   width={'100%'}>

      
      <Text
        as="h2"
        fontSize="lg"
        fontWeight="bold"
        display="flex"
        color='white'
        alignItems={'center'}
        justifyContent={'center'}
        mt={0}
        >
       <Icon as={GithubIcon} boxSize={5} mr={2} color={'white'}/>
        Dependabot Alerts
      </Text>


        {/* //toggle  */}
        <ToggleButton isToggled={isToggled} setIsToggled={setIsToggled}/>
        </Flex>
    </Box>
  )
}


