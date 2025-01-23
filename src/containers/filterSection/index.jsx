import React, { useCallback, useEffect, useState } from "react";
import {
    Box,
    HStack,
    useBreakpointValue,
  } from "@chakra-ui/react";

import {SearchBar} from '../../components/index'
import {Filters} from '../index'

export const FilterSection = ({getAlertsData, modifyQueryParams, filterResultsBasedOnSearchQuery}) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSeverity, setSelectedSeverity] = useState([]);
    const [selectedState, setSelectedState] = useState([]);
    const [selectedEcosystem, setSelectedEcosystem] = useState([]);
    const [selectedScope, setSelectedScope] = useState([]);
    const [sortOrder, setSortOrder] = useState("desc");

     const searchBarWidth = useBreakpointValue({
        base: "65vw",
        md: "45vw",
        lg: "68vw",
      });
    
      const constructParams = () => {
        const queryParams = {}; 
        if (selectedSeverity.length > 0) {
          queryParams.severity = selectedSeverity.join(',');
        }
        if (selectedState.length > 0) {
          queryParams.state = selectedState.join(',');
        }
        if (selectedEcosystem.length > 0) {
          queryParams.ecosystem = selectedEcosystem.join(',');
        }
        if (selectedScope.length > 0) {
          queryParams.scope = selectedScope.join(',');
        }
        if (sortOrder) {
          queryParams.direction = sortOrder;
        }
        return queryParams; 
      };

      const filterResults = async() => {
        const queryParams = constructParams();
        modifyQueryParams(queryParams);
        await getAlertsData(1);
      };
    
      const debouncedFilterResults = useCallback(() => {
        const handler = setTimeout(() => {
          filterResultsBasedOnSearchQuery(searchQuery);
        }, 300); 
    
        return () => {
          clearTimeout(handler);
        };
      }, [searchQuery]);
    
      useEffect(() => {
        debouncedFilterResults();
      }, [searchQuery]);
  return (
    <Box bgColor='white'>
       <HStack className="search-filter" spacing={2} >
          <SearchBar
            placeholder={"Search by Summary..."}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            searchBarWidth={searchBarWidth}
          />

          <Filters selectedSeverity={selectedSeverity}
            setSelectedSeverity={setSelectedSeverity}
            selectedState={selectedState}
            setSelectedState={setSelectedState}
            selectedEcosystem={selectedEcosystem}
            setSelectedEcosystem={setSelectedEcosystem}
            selectedScope={selectedScope}
            setSelectedScope={setSelectedScope}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            filterResults={filterResults}
          />
        </HStack>
    </Box>
  )
}

