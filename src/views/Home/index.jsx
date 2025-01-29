import { Box, useBreakpointValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { TopBar, SideBar, MainBox } from "../../containers/index";


export const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentActiveRepo, setCurrentActiveRepo] = useState("");
  const [isToggled, setIsToggled] = useState(false);
  const marginLeft = useBreakpointValue({ base: "1%", md: "31%", lg: "19%" });
  const paddingMainComponent = useBreakpointValue({
    base: "2",
    md: "10",
    lg: "6",
  });
  const handleSideBarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleToggleView = () => {
     setToggleView(!toggleView);
  }
  return (
    <Box>
      <TopBar 
        handleSideBarToggle={handleSideBarToggle}
        isSidebarOpen={isSidebarOpen}
        isToggled={isToggled}
        setIsToggled={setIsToggled}
      />
      <SideBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        currentActiveRepo={currentActiveRepo}
        setCurrentActiveRepo={setCurrentActiveRepo}
        handleSideBarToggle={handleSideBarToggle}
      />

      <Box ml={marginLeft} p={paddingMainComponent}>
        <MainBox REPO_NAME={currentActiveRepo} isToggled={isToggled}></MainBox>
      </Box>
    </Box>
  );
};
