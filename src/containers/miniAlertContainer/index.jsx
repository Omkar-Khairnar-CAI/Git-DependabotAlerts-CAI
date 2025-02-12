import React, { useState, useEffect, useRef } from 'react';
import { Flex, Button, Text } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { AlertTable, DetailsModal, TimelineModal, FilterModal } from '../../components/index';
import { filterConfig } from '../../utils/filterConfig';
import { SummaryAndDescpModal } from '../../components/summaryAndDescpModal';
import getData from '../../utils/getGitData';

const VITE_GITHUB_REPO_OWNER = import.meta.env.VITE_GITHUB_OWNER;
const VITE_GITHUB_REPO_NAME = import.meta.env.VITE_GITHUB_REPO;

export const MiniAlertContainer = ({ REPO_NAME }) => {
  const getInitialFilterState = () =>
    filterConfig
      .filter(config => config.enabled)
      .reduce((acc, config) => ({ ...acc, [config.key]: [] }), {});

  const getStaticFilterOptions = () =>
    filterConfig
      .filter(config => config.enabled)
      .reduce((acc, config) => ({ ...acc, [config.key]: config.options }), {});

  const [filteredAlerts, setFilteredAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNum, setPageNum] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);
  const [isMetaDataOpen, setIsMetaDataOpen] = useState(false);
  const [isDismissedOpen, setIsDismissedOpen] = useState(false);
  const [isSummandDescpOpen, setIsSSummandDescpOpen] = useState(false);
  const [selectedAlert, setSelectedAlert] = useState(null);
  
  const [tempFilters, setTempFilters] = useState(getInitialFilterState());
  const [appliedFilters, setAppliedFilters] = useState(getInitialFilterState());
  
  const [overallFilterOptions] = useState(getStaticFilterOptions());
  
  const [lastElement, setLastElement] = useState(null);
  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting && hasMore) {
        setPageNum((no) => no + 1);
      }
    })
  );

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  useEffect(() => {
    fetchAlerts(appliedFilters, pageNum);
  }, [pageNum, appliedFilters, REPO_NAME]);

  const fetchAlerts = async (filters = {}, page = 1) => {
    setLoading(true);
    try {
      const params = {
        page,
        per_page: 10,
        ...filters
      };
      const endpoint = `repos/${VITE_GITHUB_REPO_OWNER}/${REPO_NAME}/dependabot/alerts`;

      const alerts = await getData({
        endpoint,
        params,
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28"
        }
      });

      if (alerts.error) {
        throw new Error(alerts.msg);
      }

      if (page === 1) {
        setFilteredAlerts(alerts.data);
      } else {
        setFilteredAlerts(prev => [...prev, ...alerts.data]);
      }

      setHasMore(alerts.data.length > 0);
    } catch (error) {
      console.error("Error fetching alerts:", error);
    } finally {
      setLoading(false);
    }
  };

  const resetFilters = () => {
    const resetState = getInitialFilterState();
    setTempFilters(resetState);
    setPageNum(1);
    setHasMore(true);
    fetchAlerts({}, 1);
  };

  const openFilterModal = () => {
    setTempFilters({ ...appliedFilters });
    setIsFilterModalOpen(true);
  };

  const handleFilterChange = (filterType, value) => {
    setTempFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value]
    }));
  };

  const applyFilters = () => {
    setAppliedFilters({ ...tempFilters });
    setPageNum(1);
    setHasMore(true);
    setIsFilterModalOpen(false);
  };

  return (
    <Flex direction="column" w="full" p={4}>
      <Flex justify="end" mb={4}>
        <Button 
          onClick={openFilterModal}
          leftIcon={<Search2Icon />}
          bgColor="teal.200"
          _hover={{ bg: 'teal.300' }}
          fontSize={{ base: "xs", md: "sm", lg: "md" }}
          padding={{ base: "2", md: "3", lg: "4" }}
        >
          Filters
        </Button>
      </Flex>

      <AlertTable 
        loading={loading}
        pageNum={pageNum}
        setLastElement={setLastElement}
        alerts={filteredAlerts} 
        setSelectedAlert={setSelectedAlert}
        setIsMetaDataOpen={setIsMetaDataOpen}
        setIsTimelineOpen={setIsTimelineOpen}
        setIsDismissedOpen={setIsDismissedOpen}
        setIsSummandDescpOpen={setIsSSummandDescpOpen}
      />

      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        filterOptions={overallFilterOptions}
        tempFilters={tempFilters}
        handleFilterChange={handleFilterChange}
        applyFilters={applyFilters}
        resetFilters={resetFilters}
        filterConfig={filterConfig}
      />

      <SummaryAndDescpModal isSummandDescpOpen={isSummandDescpOpen}
        setIsSSummandDescpOpen={setIsSSummandDescpOpen}
        selectedAlert={selectedAlert}
      />

      <DetailsModal isMetaDataOpen={isMetaDataOpen}
        setIsMetaDataOpen={() => setIsMetaDataOpen(false)}
        selectedAlert={selectedAlert}
      />

      <TimelineModal isTimelineOpen={isTimelineOpen}
        setIsTimelineOpen={setIsTimelineOpen}
        selectedAlert={selectedAlert}
      />

      {loading && pageNum > 1 && (
        <Text textAlign="center">Loading more alerts...</Text>
      )}
    </Flex>
  );
};
