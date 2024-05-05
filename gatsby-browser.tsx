// gatsby-browser.js
import './src/i18n.js';

import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

export const wrapRootElement = ({ element }) => {
  return <ChakraProvider>{element}</ChakraProvider>;
};
