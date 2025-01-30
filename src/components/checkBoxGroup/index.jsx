import React from "react";
import { CheckboxGroup, HStack, Checkbox, Box, Badge, useTheme } from "@chakra-ui/react";
import { getColor } from "../../utils/badgeColors";
export const CheckboxGroupComponent = ({
  label,
  options,
  value,
  onChange,
  colorScheme,
}) => {
  const theme = useTheme()
  return (
    <div>
      <Box fontWeight="500" color={theme.colors.black[1000]}>{label}:</Box>
      <CheckboxGroup value={value} onChange={onChange} colorScheme={colorScheme} variant={''}>
        <HStack align="start" wrap="wrap">
          {options.map((option) => (
            <Checkbox key={option} value={option} sx={{
              ".chakra-checkbox__control": {
                borderColor: theme.colors.black[400], 
                _hover: { borderColor: "gray.600" }, 
                _checked: { borderColor: "blue.500", bg: "blue.500" }, 
              },
            }}>
               <Badge colorScheme={getColor(label.toLowerCase(),option)} fontSize={{ base: "xs", md: "sm" }}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
               </Badge>
            </Checkbox>
          ))}
        </HStack>
      </CheckboxGroup>
    </div>
  );
};
