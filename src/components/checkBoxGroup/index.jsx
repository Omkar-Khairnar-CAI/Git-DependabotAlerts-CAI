import React from "react";
import { CheckboxGroup, HStack, Checkbox, Box } from "@chakra-ui/react";

export const checkboxGroup = ({
  label,
  options,
  value,
  onChange,
  colorScheme,
}) => {
  return (
    <div>
      <Box fontWeight="500" >{label}:</Box>
      <CheckboxGroup value={value} onChange={onChange} colorScheme={colorScheme}>
        <HStack align="start" wrap="wrap">
          {options.map((option) => (
            <Checkbox key={option} value={option}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </Checkbox>
          ))}
        </HStack>
      </CheckboxGroup>
    </div>
  );
};
