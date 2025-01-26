import React, { useEffect, useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { filterSchema } from "../../utils/filterSchema";
import { CheckboxGroupComponent } from "../../components/index";
import { RadioGroupComponent } from "../../components/index";
import {
  Box,
  Button,
  VStack,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
} from "@chakra-ui/react";

export const Filters = ({ filters, setFilters, filterResults }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tempFilters, setTempFilters] = useState(filters);

  const handleApplyChanges = () => {
    setFilters(tempFilters);
    filterResults(tempFilters);
    onClose();
  };

  return (
    <Box position="relative" h="100%" w="100%" >
      {/* Button to open the drawer */}
      <Button onClick={onOpen} rightIcon={<ChevronDownIcon />}>
        Filters
      </Button>

      {/* Drawer Component */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        preserveScrollBarGap
      >
        <DrawerContent
          h="100%"
          maxH="100%"
          borderLeftWidth="1px"
          overflowY="auto"
          position="absolute"
          right={0}
          zIndex={5}
          bg="#F4F1EB" 
        >

          <DrawerHeader borderBottomWidth="1px">Filter Options</DrawerHeader>
          <DrawerBody>
          {/* <DrawerHeader borderBottomWidth="1px">Filter Options</DrawerHeader> */}
            <VStack align="start">
              {filterSchema.map((filter) => {
                return filter.type === "checkbox" ? (
                  <CheckboxGroupComponent
                    key={filter.label}
                    label={filter.label}
                    options={filter.options}
                    value={tempFilters[filter.key]}
                    onChange={(values) =>
                      setTempFilters({ ...tempFilters, [filter.key]: values })
                    }
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
            </VStack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="teal" onClick={handleApplyChanges}>
              Apply
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
