import React, { useEffect, useState } from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import getGitData from "../../utils/getGitData";
import { Loader, Error } from "../../components/index";
import { FilterSection } from '../index';
import { AlertsPage } from '../index';
import InfiniteScroll from 'react-infinite-scroll-component'; 

const GITHUB_OWNER = import.meta.env.VITE_GITHUB_OWNER;

export const MainBox = ({ REPO_NAME }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [queryParams, setQueryParams] = useState({});
  const [hasMoreContent, setHasMoreContent] = useState(true);

  const modifyQueryParams = (newParams) => {
    setQueryParams(newParams);
    setPage(1); 
    setData([]);
    setHasMoreContent(true); 
  };

  const getAlertsData = async () => {
    try {
      if (REPO_NAME) {
        setIsLoading(true);
        const params = { ...queryParams, per_page: pageSize, page };
        const alerts = await getGitData({
          endpoint: `repos/${GITHUB_OWNER}/${REPO_NAME}/dependabot/alerts`,
          params,
        });

        if (alerts.error) {
          setIsError(true);
          setError(alerts.msg);
        } else {
          setData((prevData) => (page === 1 ? alerts.data : [...prevData, ...alerts.data]));
          setHasMoreContent(alerts.data.length === pageSize); 
          setIsError(false);
        }
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setData([]); 
    setPage(1); 
    setHasMoreContent(true);
    getAlertsData();
  
  }, [REPO_NAME, queryParams]);


  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (page > 1) {
      getAlertsData();
    }
  }, [page]);

  return (
    <Box p={2} mt={"20px"}>
      <Grid templateRows="auto 1fr" gap={3}>
        <GridItem height={"22px"} position="sticky" top={"8%"} bg={"white"}></GridItem>
        <GridItem position="sticky" top={"10%"} >
          <FilterSection modifyQueryParams={modifyQueryParams} getAlertsData={getAlertsData}/>
        </GridItem>
        {/* <GridItem height={"10px"} position="sticky" top={"15%"} bg={"white"}></GridItem> */}
        
        <GridItem>
          {!isLoading || page > 1 ? (
            isError ? (
              <Error message={error} />
            ) : (
              <InfiniteScroll
                dataLength={data.length} 
                next={fetchMoreData} 
                hasMore={hasMoreContent} 
                loader={<Loader />} 
              >
                <AlertsPage filteredData={data} />
              </InfiniteScroll>
            )
          ) : (
            <Loader />
          )}
        </GridItem>
      </Grid>
    </Box>
  );
};
