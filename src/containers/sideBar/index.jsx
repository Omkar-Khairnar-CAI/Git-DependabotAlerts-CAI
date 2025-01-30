import { Box, Text, useBreakpointValue, useTheme } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Loader, SearchBar, SideBarItem } from "../../components/index";
import getGitData from "../../utils/getGitData";

const GITHUB_OWNER = import.meta.env.VITE_GITHUB_OWNER;

// this is the complete left side view box
export const SideBar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  currentActiveRepo,
  setCurrentActiveRepo,
  handleSideBarToggle,
}) => {
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [repos, setRepos] = useState([]);
  const [searchtext, setSearchtext] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  const sideBarWidth = useBreakpointValue({
    base: "50%",
    md: "33%",
    lg: "18%",
  });
  const sideBarTopMargin = useBreakpointValue({ base: "0", md: "3", lg: "-1" });

  const getUserRepos = async () => {
    const res = await getGitData({ endpoint: `users/${GITHUB_OWNER}/repos` });
    setRepos(res.data);
    setFilteredRepos(res.data);
    setCurrentActiveRepo(res.data.length > 0 ? res.data[0].name : "");
  };

  useEffect(() => {
    getUserRepos();
  }, []);

  const handleItemClick = (item) => {
    setCurrentActiveRepo(item.name);
    //Toggle only for small screen
    if (window.innerWidth < 768) {
      handleSideBarToggle();
    }
  };
  useEffect(()=>{
    if(window.innerWidth > 768){
      setIsSidebarOpen(true);      
    }
  },[window.innerWidth])

  const handleChange = (e) => {
    setSearchtext(e.target.value);
  };

  const handleSearchRepo = () => {
    setIsLoading(true);
    const filteredRepos = repos.filter((repo) =>
      repo.name.toLowerCase().includes(searchtext.toLowerCase())
    );
    setFilteredRepos(filteredRepos);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!searchtext || searchtext === "") {
      setFilteredRepos(repos);
    } else {
      handleSearchRepo();
    }
  }, [searchtext]);

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      handleSearchRepo();
    }
  };
 
  return (
    <>
      <Box
        bg={theme.colors.primary.lighter}
        color="black"
        height={"100%"}
        width={sideBarWidth}
        position="fixed"
        top="60px"
        p={4}
        mt={sideBarTopMargin}
        zIndex={2}
        left={isSidebarOpen ? "0" : "-100%"}
        transition="left 0.3s ease-in-out"
      >
        <Box mb={4} p={1} pl={3} bg="white" borderRadius="md" boxShadow="sm">
          <SearchBar
            variant="flushed"
            placeholder={"Search Repos"}
            searchQuery={searchtext}
            setSearchQuery={setSearchtext}
            handleKeyDown={handleKeyDown}
          />
        </Box>

        <Box
          height="calc(100% - 100px)"
          overflowY="auto"
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
            "&::-moz-scrollbar": {
              display: "none",
            },
            "&::-ms-scrollbar": {
              display: "none",
            },
          }}
        >
          {isLoading && <Loader />}
          {filteredRepos.length > 0 ? (
            filteredRepos.map((repo, key) => {
              return (
                <Box key={key}>
                  <SideBarItem
                    repo={repo}
                    currentActiveRepo={currentActiveRepo}
                    handleItemClick={handleItemClick}
                  />
                </Box>
              );
            })
          ) : (
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              height="100%"
              color="gray.600"
              textAlign="center"
            >
              <Box
                bg="white"
                p={4}
                borderRadius="md"
                boxShadow="sm"
                width="80%"
                maxWidth="300px"
                textAlign="center"
              >
                <Text fontSize="lg" fontWeight="bold" mb={2}>
                  No Repositories Found
                </Text>
                <Text fontSize="sm" mb={4}>
                  Your search didn’t match any repositories. Try refining your
                  search query.
                </Text>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};
