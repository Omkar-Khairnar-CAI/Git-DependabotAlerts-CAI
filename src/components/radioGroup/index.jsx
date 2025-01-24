import React from "react";
import { RadioGroup, Stack, Radio, Box } from "@chakra-ui/react";

export const RadioGroupComponent = ({
  label,
  options,
  value,
  onChange,
  colorScheme,
}) => {
  return (
    <div>
      <Box fontWeight="500">{label}:</Box>
      <RadioGroup value={value} onChange={onChange} colorScheme={colorScheme}>
        <Stack spacing={4} direction="row">
          {options.map((option) => (
            <Radio key={option} value={option}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </div>
  );
};
