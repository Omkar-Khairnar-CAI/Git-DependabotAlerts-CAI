import { extendTheme } from "@chakra-ui/react";
import foundations from "./foundations";


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
  ...foundations,
  fonts,
});

