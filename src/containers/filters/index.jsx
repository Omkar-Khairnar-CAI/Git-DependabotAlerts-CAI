import React, { useState } from "react";
import {
  Box,
  Button,
  VStack,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { filterSchema } from "../../utils/filterSchema";
import { CheckboxGroupComponent } from "../../components/index";
import { RadioGroupComponent } from "../../components/index";

export const Filters = ({
  selectedSeverity,
  setSelectedSeverity,
  selectedState,
  setSelectedState,
  selectedEcosystem,
  setSelectedEcosystem,
  selectedScope,
  setSelectedScope,
  sortOrder,
  setSortOrder,
  filterResults,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const stateHandlers = {
    selectedSeverity,
    setSelectedSeverity,
    selectedState,
    setSelectedState,
    selectedEcosystem,
    setSelectedEcosystem,
    selectedScope,
    setSelectedScope,
    sortOrder,
    setSortOrder,
  };

  const handleApplyChanges = () => {
    filterResults();
    setMenuOpen(false);
  };

  return (
    <div>
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          onClick={() => setMenuOpen(true)}
        >
          Filters
        </MenuButton>
        <MenuList maxW={{ base: "85vw", md: "50vw" }}>
          <Box p={5}>
            <VStack align="start">
              {filterSchema.map((filter) => {
                const handlerName = `set${filter.stateHandler.charAt(0).toUpperCase() + filter.stateHandler.slice(1)}`;
                return filter.type === "checkbox" ? (
                  <CheckboxGroupComponent
                    key={filter.label}
                    label={filter.label}
                    options={filter.options}
                    value={stateHandlers[filter.stateHandler]}
                    onChange={(values) => stateHandlers[handlerName](values)}
                    colorScheme={filter.colorScheme}
                  />
                ) : (
                  <RadioGroupComponent
                    key={filter.label}
                    label={filter.label}
                    options={filter.options}
                    value={stateHandlers[filter.stateHandler]}
                    onChange={(e) => stateHandlers[handlerName](e)}
                    colorScheme={filter.colorScheme}
                  />
                );
              })}
              <Box position={"absolute"} right={10} bottom={7}>
                <Button colorScheme="black" variant="outline"  _hover={{bg:'#9f6d4d', color:'white'}} onClick={handleApplyChanges}>
                  Apply
                </Button>
              </Box>
            </VStack>
          </Box>
        </MenuList>
      </Menu>
    </div>
  );
};
