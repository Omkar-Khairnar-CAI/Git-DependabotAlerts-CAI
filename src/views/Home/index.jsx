import { Box, useBreakpointValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { TopBar, SideBar, MainBox } from "../../containers/index";
import { useLocation, useParams } from "react-router-dom";

export const Home = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentActiveRepo, setCurrentActiveRepo] = useState("");
  const [isToggled, setIsToggled] = useState(true);

  const handleSideBarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleToggleView = () => {
    setToggleView(!toggleView);
  };

  useEffect(() => {
    if (location.state) {
      setCurrentActiveRepo(location.state);
    }
  }, [location]);

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

      <Box>
        <MainBox
          REPO_NAME={currentActiveRepo} 
          setCurrentActiveRepo={setCurrentActiveRepo}
          isToggled={isToggled}
        ></MainBox>
      </Box>
    </Box>
  );
};
