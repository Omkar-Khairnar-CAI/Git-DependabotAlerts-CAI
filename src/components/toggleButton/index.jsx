import React from "react";
import { Flex, Text, Switch } from "@chakra-ui/react";

export const ToggleButton = ({ isToggled, setIsToggled }) => {
  return (
    <Flex align="center" gap={3}>
      <Text>{isToggled ? "ON" : "OFF"}</Text>
      <Switch
        isChecked={isToggled}
        onChange={() => setIsToggled(!isToggled)}
        colorScheme={isToggled ? "green" : "red"}
        size="md"
      />
    </Flex>
  );
};
