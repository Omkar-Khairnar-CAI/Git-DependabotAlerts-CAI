import React from "react";
import { Badge } from "@chakra-ui/react";

export const BadgeComponent = ({ type, value, variant }) => {
  let colorScheme;

  if (type === "severity") {
    colorScheme =
      value === "high" ? "red" : value === "medium" ? "yellow" : "green";
  } else if (type === "state") {
    colorScheme =
      value === "dismissed" ? "gray" : value === "fixed" ? "green" : "red";
  }

  return (
    <Badge colorScheme={colorScheme} variant={variant}>
      {/* {type === "severity" ? `Severity: ${value}` : value} */}
      {value}
    </Badge>
  );
};
