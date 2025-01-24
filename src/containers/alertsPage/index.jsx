import React from "react";
import { Box, Text } from "@chakra-ui/react";
import {AlertCard} from '../index';

export const AlertsPage = ({ filteredData }) => {
  return (
    <Box mt={6}>
      {filteredData.length > 0 ? (
        filteredData.map((alert, index) => (
          <Box key={index} mb={3} m={"4"}>
            <AlertCard  alert={alert} />
          </Box>
        ))
      ) : (
        <Text>No alerts found matching the filters</Text>
      )}
    </Box>
  );
};