import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import { TopBar } from '../../containers/index'


// Home view
// will have api calls to the list of repos
// will be sent to its child components
// child - sidebar container, topBar container, mainBox container
export const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSideBarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <Box>
      <TopBar handleSideBarToggle={handleSideBarToggle} isSidebarOpen={isSidebarOpen}/>
    </Box>
  )
}

