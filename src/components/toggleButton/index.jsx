import React from "react";
import { Flex, Text, Switch, useColorModeValue, useTheme } from "@chakra-ui/react";

export const ToggleButton = ({ isToggled, setIsToggled }) => {
  const theme = useTheme();
  const bgColor = useColorModeValue("#F4F1EB", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Flex
      align="center"
      bg={{
        base: 'transparent',
        md: theme.colors.primary.lighter,
      }}
      px={3}
      py={2}
      borderRadius="md"
      boxShadow="sm"
      border="1px"
      borderColor={{
        base: 'transparent',
        md: theme.colors.gray[50],
      }}
      userSelect="none"
    >
      <Text
        fontSize="sm"
        fontWeight="medium"
        color={theme.colors.gray[700]}
        mr={2}
      >
        {isToggled ? "Expanded View" : "Minimalistic View"}
      </Text>
      <Switch
        isChecked={isToggled}
        onChange={() => setIsToggled(!isToggled)}
        colorScheme="blue"
        size="md"
      />
    </Flex>
  );
};
