import React from "react";
import { Flex, Text, Switch, useColorModeValue } from "@chakra-ui/react";

export const ToggleButton = ({ isToggled, setIsToggled }) => {
  const bgColor = useColorModeValue("#F4F1EB", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Flex
      align="center"
      bg={bgColor}
      px={3}
      py={2}
      borderRadius="md"
      boxShadow="sm"
      border="1px"
      borderColor={borderColor}
      userSelect="none"
    >
      <Text
        fontSize="sm"
        fontWeight="medium"
        color={textColor}
        mr={2}
      >
        {isToggled ? "Expanded View" : "Minimalistic View"}
      </Text>
      <Switch
        isChecked={isToggled}
        onChange={() => setIsToggled(!isToggled)}
        colorScheme="green"
        size="md"
      />
    </Flex>
  );
};
