import React from "react";
import { RadioGroup, Stack, Radio, Box, useTheme } from "@chakra-ui/react";

export const RadioGroupComponent = ({
  label,
  options,
  value,
  onChange,
  colorScheme,
}) => {
  const theme = useTheme();
  return (
    <div>
      <Box fontWeight="500" mb="2">
        {label}:
      </Box>
      <RadioGroup value={value} onChange={onChange} colorScheme={colorScheme}>
        <Stack spacing={4} direction="row">
          {options.map((option) => (
            <Radio
              key={option}
              value={option}
              sx={{
                "& .chakra-radio__control": {
                  borderColor: "black", 
                  _hover: { borderColor: "gray.600" }, 
                  _checked: { borderColor: "blue.500", bg: "blue.500" }, 
                },
              }}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </div>
  );
};
