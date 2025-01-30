import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Divider,
} from "@chakra-ui/react";

export const ModalLayout = ({ 
  isOpen, 
  onClose, 
  title, 
  children,
  size = { base: "xs", sm:"sm", md:"md", lg: "lg" }
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={size}
      scrollBehavior="inside"
      // isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize={{ base: "md", md: "lg" }}>
          {title}
        </ModalHeader>
        <ModalCloseButton />
        <Divider/>
        <ModalBody fontSize={{ base: "sm", md: "md" }}>
          {children}
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

