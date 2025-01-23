import { Box, Text, Icon } from "@chakra-ui/react";
import React from "react";
import { FaLock, FaExclamationTriangle, FaBan, FaBug } from "react-icons/fa";

export const Error = ({ message, statusCode }) => {
  // Render specific content based on the status code
  const getErrorDetails = () => {
    switch (statusCode) {
      case 401:
        return {
          icon: FaLock,
          title: "Unauthorized Access",
          description: "You don't have permission to access this resource. Please check your credentials or login again.",
          color: "orange.400",
        };
      case 403:
        return {
          icon: FaBan,
          title: "Forbidden",
          description: "Access to this resource is restricted. Please contact the administrator if you believe this is a mistake.",
          color: "orange.400",
        };
      case 404:
        return {
          icon: FaExclamationTriangle,
          title: "Resource Not Found",
          description: "The requested resource could not be found. It might have been moved or deleted.",
          color: "blue.400",
        };
      default:
        return {
          icon: FaBug,
          title: "An Error Occurred",
          description: message || "Something went wrong. Please try again later.",
          color: "gray.500",
        };
    }
  };

  const { icon, title, description, color } = getErrorDetails();

  return (
    <Box
      textAlign="center"
      padding="20px"
      border="1px solid"
      borderColor={color}
      borderRadius="8px"
      maxW="400px"
      mx="auto"
      mt="50px"
      boxShadow="md"
    >
      <Icon as={icon} boxSize="40px" color={color} mb="10px" />
      <Text fontSize="20px" fontWeight="bold" color={color} mb="10px">
        {title}
      </Text>
      <Text fontSize="16px" color="#666">
        {description}
      </Text>
    </Box>
  );
};
