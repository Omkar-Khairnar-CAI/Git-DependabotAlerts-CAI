import React, { useState } from "react";
import {
  AlertTable,
  DetailsModal,
  TimelineModal,
  SummaryAndDescpModal
} from "../../components/index";
import { Box } from "@chakra-ui/react";

export const MinimalisticView = ({
  isLoading,
  setLastElement,
  filteredData,
}) => {
  //Modals
  const [isTimelineOpen, setIsTimelineOpen] = useState  (false);
  const [isMetaDataOpen, setIsMetaDataOpen] = useState(false);
  const [isDismissedOpen, setIsDismissedOpen] = useState(false);
  const [isSummandDescpOpen, setIsSSummandDescpOpen] = useState(false);

  //Selected Alert
  const [selectedAlert, setSelectedAlert] = useState(null);

  return (
    <Box mt={1}>
      <AlertTable
        isLoading={isLoading}
        // observer

        setLastElement={setLastElement}
        // for alert based modal
        alerts={filteredData}
        setSelectedAlert={setSelectedAlert}
        // modals
        setIsMetaDataOpen={setIsMetaDataOpen}
        setIsTimelineOpen={setIsTimelineOpen}
        setIsDismissedOpen={setIsDismissedOpen}
        setIsSummandDescpOpen={setIsSSummandDescpOpen}
      />

      <SummaryAndDescpModal
        isSummandDescpOpen={isSummandDescpOpen}
        setIsSSummandDescpOpen={setIsSSummandDescpOpen}
        selectedAlert={selectedAlert}
      />

      <DetailsModal
        isMetaDataOpen={isMetaDataOpen}
        setIsMetaDataOpen={() => setIsMetaDataOpen(false)}
        selectedAlert={selectedAlert}
      />

      <TimelineModal
        isTimelineOpen={isTimelineOpen}
        setIsTimelineOpen={setIsTimelineOpen}
        selectedAlert={selectedAlert}
      />
    </Box>
  );
};
