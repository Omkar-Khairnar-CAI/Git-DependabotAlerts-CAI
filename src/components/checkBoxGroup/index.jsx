import React from "react";
import { CheckboxGroup, HStack, Checkbox, Box, Badge , Divider} from "@chakra-ui/react";
import { getColor } from "../../utils/badgeColors";
export const CheckboxGroupComponent = ({
  label,
  options,
  value,
  onChange,
  colorScheme,
}) => {
  return (
    <>
      <Box fontWeight="500" >{label} :</Box>
      <CheckboxGroup value={value} onChange={onChange} colorScheme={colorScheme}>
        <HStack align="start" wrap="wrap">
          {options.map((option) => (
            <Checkbox key={option} value={option}>
               <Badge colorScheme={getColor(label.toLowerCase(),option)} fontSize={{ base: "xs", md: "sm" }}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
               </Badge>
            </Checkbox>
          ))}
        </HStack>
      </CheckboxGroup>
      <Divider/>
    </>
  );
};
