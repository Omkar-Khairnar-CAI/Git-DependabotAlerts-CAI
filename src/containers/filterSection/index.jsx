import React, { useState } from "react";
import {
    Box,
    HStack,
    useBreakpointValue,
  } from "@chakra-ui/react";

import {SearchBar} from '../../components/index'
import {Filters} from '../index'

export const FilterSection = ({getAlertsData, modifyQueryParams}) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSeverity, setSelectedSeverity] = useState([]);
    const [selectedState, setSelectedState] = useState([]);
    const [selectedEcosystem, setSelectedEcosystem] = useState([]);
    const [selectedScope, setSelectedScope] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc");

     const searchBarWidth = useBreakpointValue({
        base: "65vw",
        md: "45vw",
        lg: "68vw",
      });
    
      const constructParams = () => {
        const queryParams = {}; 
      
        if (searchQuery) {
          queryParams.q = searchQuery;
        }
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
          queryParams.sort_order = sortOrder;
        }
        return queryParams; 
      };

      const filterResults = async() => {
        const queryParams = constructParams();
        modifyQueryParams(queryParams);
        await getAlertsData();
      };
    
      const handleKeyDown = (e) => {
        if (e.key == "Enter") {
          filterResults();
        }
      };
  return (
    <Box bgColor='white'>
       <HStack className="search-filter" spacing={2} >
          <SearchBar
            placeholder={"Search by Summary..."}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleKeyDown={handleKeyDown}
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

