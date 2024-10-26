// gatsby-browser.js
import './src/i18n.js';
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

export const wrapRootElement = ({ element }) => {
  return <ChakraProvider>{element}</ChakraProvider>;
};

// Skrolujte do hash sekcije nakon učitavanja stranice
export const onRouteUpdate = ({ location }) => {
  if (typeof window !== "undefined" && location.hash) {
    window.setTimeout(() => {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 0);
  }
};
