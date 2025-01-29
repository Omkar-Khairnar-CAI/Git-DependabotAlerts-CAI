import { Box, Text, Icon, useTheme } from "@chakra-ui/react";
import React from "react";
import { FaLock, FaExclamationTriangle, FaBan, FaBug } from "react-icons/fa";

export const Error = ({ message, statusCode }) => {
  const theme = useTheme();

  const getErrorDetails = () => {
    switch (statusCode) {
      case 401:
        return {
          icon: FaLock,
          title: "Unauthorized Access",
          description: "You don't have permission to access this resource. Please check your credentials or login again.",
          color: theme.colors.error.main,
        };
      case 403: 
        return {
          icon: FaBan,
          title: "Forbidden",
          description: "Access to this resource is restricted. Please contact the administrator if you believe this is a mistake.",
          color: theme.colors.error.main,
        };
      case 404:
        return {
          icon: FaExclamationTriangle,
          title: "Resource Not Found",
          description: "The requested resource could not be found. It might have been moved or deleted.",
          color: theme.colors.error.light,
        };
      default:
        return {
          icon: FaBug,
          title: "An Error Occurred",
          description: message || "Something went wrong. Please try again later.",
          color: theme.colors.error.main,
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
