import React, { useCallback, useEffect, useState } from "react";
import {
    Box,
    HStack,
    useBreakpointValue,
  } from "@chakra-ui/react";

import {SearchBar} from '../../components/index'
import {Filters} from '../index'

import { initialFiltersValues } from "../../utils/filterSchema";


export const FilterSection = ({getAlertsData, modifyQueryParams, filterResultsBasedOnSearchQuery}) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filters, setFilters] = useState(initialFiltersValues);
   

     const searchBarWidth = useBreakpointValue({
        base: "65vw",
        md: "45vw",
        lg: "68vw",
      });
    
      const constructParams = (tempFilters) => {
        const queryParams = {}; 

        Object.keys(tempFilters).forEach((key) => {
          if(key === 'direction'){
            queryParams[key] = tempFilters[key];
          }
          else if (tempFilters[key].length > 0) {
            queryParams[key] = tempFilters[key].join(',');
          }
        })
        console.log(queryParams);
        
        return queryParams; 
      };

      const filterResults = async(tempFilters) => {
        const queryParams = constructParams(tempFilters);        
        modifyQueryParams(queryParams);
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

      useEffect(()=>{
        console.log(filters);
      },[filters])
     
  return (
    <Box bgColor='white'>
       <HStack className="search-filter" spacing={2} >
          <SearchBar
            placeholder={"Search by Summary..."}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            searchBarWidth={searchBarWidth}
          />

          <Filters 
            filters={filters}
            setFilters={setFilters}
            filterResults={filterResults}
          />
        </HStack>
    </Box>
  )
}

