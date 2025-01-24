import React from 'react'
import { AlertsContainer } from '../../containers/index'

import { Box, useBreakpointValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { TopBar, SideBar, MainBox , AlertsContainer} from "../../containers/index";

// Home view
// will have api calls to the list of repos
// will be sent to its child components
// child - sidebar container, topBar container, mainBox container
export const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentActiveRepo, setCurrentActiveRepo] = useState("");
  const marginLeft = useBreakpointValue({ base: "1%", md: "31%", lg: "19%" });
  const paddingMainComponent = useBreakpointValue({
    base: "2",
    md: "10",
    lg: "6",
  });
  const handleSideBarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <Box>
      <TopBar
        handleSideBarToggle={handleSideBarToggle}
        isSidebarOpen={isSidebarOpen}
      />
      <SideBar
        isSidebarOpen={isSidebarOpen}
        currentActiveRepo={currentActiveRepo}
        setCurrentActiveRepo={setCurrentActiveRepo}
        handleSideBarToggle={handleSideBarToggle}
      />

      <Box ml={marginLeft} p={paddingMainComponent}>
        <MainBox REPO_NAME={currentActiveRepo}></MainBox>
        <AlertsContainer/>
      </Box>
    </Box>
  );
};
