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
    <Tooltip label={label} fontSize="xs" closeOnClick>
      <Button
        size="sm"
        variant={buttonVariant}
        onClick={() => {
          setSelectedAlert(alert); 
          openModal(true);
        }}
      >
        {icon}
      </Button>
    </Tooltip>
  );
};
