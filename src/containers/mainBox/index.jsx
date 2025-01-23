import React, { useEffect, useState, useRef } from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import getGitData from "../../utils/getGitData";
import { Loader, Error } from "../../components/index";
import { FilterSection } from "../index";
import { AlertsPage } from "../index";

const GITHUB_OWNER = import.meta.env.VITE_GITHUB_OWNER;

export const MainBox = ({ REPO_NAME }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [queryParams, setQueryParams] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({msg: "", statusCode:''});
  const [hasMoreContent, setHasMoreContent] = useState(true);

  const observerRef = useRef(null); 

  const modifyQueryParams = (newParams) => {
    setQueryParams(newParams);
    setPage(1);
    setData([]);
    setFilteredData([]);
    setHasMoreContent(true);
  };

  const getAlertsData = async (currentPage) => {
    try {
      if (REPO_NAME) {
        setIsLoading(true);
        const params = { ...queryParams, per_page: pageSize, page: currentPage };
        const alerts = await getGitData({
          endpoint: `repos/${GITHUB_OWNER}/${REPO_NAME}/dependabot/alerts`,
          params,
        });

        if (alerts.error) {
          setIsError(true);
          setError({msg: alerts.msg, statusCode: alerts.statusCode});
        } else {
          const currData = alerts.data;
          setData((prevData) =>
            currentPage === 1 ? currData : [...prevData, ...currData]
          );
          setFilteredData((prevData) =>
            currentPage === 1 ? currData : [...prevData, ...currData]
          );

          setHasMoreContent(currData.length === pageSize);
          setIsError(false);
          setError({msg: '', statusCode: ''})
        }
      }
    } catch (error) {
      setIsError(true);
      setError({msg: error.message, statusCode: error.status});
    } finally {
      setIsLoading(false);
    }
  };

  const filterResultsBasedOnSearchQuery = (searchQuery) => {
    if (searchQuery) {
      const currData = data.filter((item) =>
        item.security_advisory.summary
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
      setFilteredData(currData);
    } else {
      setFilteredData(data);
    }
  };

  useEffect(() => {
    setData([]);
    setFilteredData([]);
    setPage(1);
    setHasMoreContent(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
    getAlertsData(1);
  }, [REPO_NAME, queryParams]);

  useEffect(() => {
    if (page > 1) {
      getAlertsData(page);
    }
  }, [page]);

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect(); 

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMoreContent && !isLoading) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1.0 }
    );

    const target = document.getElementById("observer-target");
    if (target) {
      observer.observe(target);
    }

    observerRef.current = observer; 

    return () => {
      if (observerRef.current) observerRef.current.disconnect(); 
    };
  }, [hasMoreContent, isLoading]);

  return (
    <Box p={2} mt={"20px"}>
      <Grid templateRows="auto 1fr" gap={3}>
        <GridItem height={"22px"} position="sticky" top={"8%"} bg={"white"}></GridItem>
        <GridItem position="sticky" top={"10%"}>
          <FilterSection
            modifyQueryParams={modifyQueryParams}
            getAlertsData={getAlertsData}
            filterResultsBasedOnSearchQuery={filterResultsBasedOnSearchQuery}
          />
        </GridItem>

        <GridItem>
          {isError ? (
            <Error message={error.msg} statusCode={error.statusCode}/>
          ) : (
            <>
              <AlertsPage filteredData={filteredData} />
              {isLoading && <Loader />}
              <div
                id="observer-target"
                style={{
                  height: "1px",
                  visibility: "hidden",
                }}
              ></div>
            </>
          )}
        </GridItem>
      </Grid>
    </Box>
  );
};
