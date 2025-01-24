import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from "@chakra-ui/react";
import { FilterModalComponent } from '../index';

export const FilterModal = ({ 
  isOpen, 
  onClose, 
  filterOptions, 
  tempFilters,
  handleFilterChange, 
  applyFilters, 
  resetFilters, 
  filterConfig 
}) => {
  const getColor = (option) => {
    const colors = {
      critical: "purple",
      high: "red",
      medium: "orange",
      low: "green"
    };
    return colors[option] || "gray";
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize={{ base: "md", md: "lg" }}>Filter Alerts</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {filterConfig
            .filter(config => config.enabled)
            .map(config => (
              <FilterModalComponent
                key={config.key}
                title={config.label}
                options={filterOptions[config.key] || []}
                selectedOptions={tempFilters[config.key] || []}
                handleChange={(value) => handleFilterChange(config.key, value)}
                getColor={config.key === 'severities' ? getColor : undefined}
              />
            ))}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={resetFilters}>
            Reset
          </Button>
          <Button colorScheme="blue" mr={3} onClick={applyFilters}>
            Apply
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
