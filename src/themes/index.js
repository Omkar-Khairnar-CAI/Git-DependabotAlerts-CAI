import { extendTheme } from "@chakra-ui/react";


const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const fonts = {
  heading: `'Open Sans', sans-serif`,
  // body: `'Open Sans', sans-serif`,  
};

export const theme = extendTheme({
  config,
  fonts,
});

