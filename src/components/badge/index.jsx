import React from "react";
import { Badge } from "@chakra-ui/react";
import { getColor } from "../../utils/badgeColors";
export const BadgeComponent = ({ type, value, variant }) => {

  return (
    <Badge colorScheme={getColor(type,value)} variant={variant}>
      {/* {type === "severity" ? `Severity: ${value}` : value} */}
      {value}
    </Badge>
  );
};
