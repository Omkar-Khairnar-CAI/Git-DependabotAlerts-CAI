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
  const [toggleView, setToggleView] = useState(false) // false means miniview
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
      console.log("switch clicked ---------")
      console.log("before", toggleView)
     setToggleView(!toggleView);
     console.log("after", toggleView);
  }
  return (
    <Box>
      <TopBar
        handleSideBarToggle={handleSideBarToggle}
        isSidebarOpen={isSidebarOpen}
        viewToggle={toggleView}
        handleViewToggle={handleToggleView}
      />
      <SideBar
        isSidebarOpen={isSidebarOpen}
        currentActiveRepo={currentActiveRepo}
        setCurrentActiveRepo={setCurrentActiveRepo}
        handleSideBarToggle={handleSideBarToggle}
      />

      <Box ml={marginLeft} p={paddingMainComponent} mt={6}>
            <MainBox REPO_NAME={currentActiveRepo}></MainBox>
        }
      </Box>
    </Box>
  );
};
