import { Button, Tooltip } from "@chakra-ui/react";
import React from "react";

export const AlertTableButton = ({
    openModal,
    label,
    setSelectedAlert,
    buttonVariant,
    icon,
    alert 
}) => {
  return (
    // <Tooltip label={label} fontSize="xs" closeOnClick zIndex={0}>
      <Button
        size="sm"
        variant={buttonVariant}
        onClick={() => {
          setSelectedAlert(alert); 
          openModal(true);
        }}
        zIndex={0}
      >
        {icon}
      </Button>
    // </Tooltip>
  );
};
