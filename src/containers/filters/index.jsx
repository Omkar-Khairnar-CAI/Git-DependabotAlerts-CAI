import React, { useEffect, useState } from "react";
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
  filters, 
  setFilters,
  filterResults,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tempFilters, setTempFilters] = useState(filters);

  useEffect(() => {
    if (!menuOpen) {
      setTempFilters(filters);
    }
  }, [filters, menuOpen]);

  const handleApplyChanges = () => {
    setFilters(tempFilters);
    filterResults(tempFilters);
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
                return filter.type === "checkbox" ? (
                  <CheckboxGroupComponent
                    key={filter.label}
                    label={filter.label}
                    options={filter.options}
                    value={tempFilters[filter.key]}
                    onChange={(values) => {
                      setTempFilters({ ...tempFilters, [filter.key]: values });
                    }}
                    colorScheme={filter.colorScheme}
                  />
                ) : (
                  <RadioGroupComponent
                    key={filter.label}
                    label={filter.label}
                    options={filter.options}
                    value={tempFilters[filter.key]}
                    onChange={(value) =>
                      setTempFilters({ ...tempFilters, [filter.key]: value })
                    }
                    colorScheme={filter.colorScheme}
                  />
                );
              })}
              <Box position={"absolute"} right={10} bottom={7}>
                <Button
                  colorScheme="black"
                  variant="outline"
                  _hover={{ bg: "#9f6d4d", color: "white" }}
                  onClick={handleApplyChanges}
                >
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
