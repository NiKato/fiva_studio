import React, { FC } from "react";
import { Button, HStack, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "EN" },
  { code: "sr", label: "SR" },
];

const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);

    // Get the current path and remove the language segment if present.
    const currentPath = window.location.pathname.split('/').slice(2).join('/');
    const newPath = lng === "en" ? `/${currentPath}` : `/${lng}/${currentPath}`;

    // Update the URL without refreshing the page.
    window.history.pushState({}, "", newPath);
  };

  const linkColor = useColorModeValue("#666666", "#ffffff");

  return (
    <HStack gap={0}>
      {languages.map((language) => (
        <Button
          key={language.code}
          size="sm"
          onClick={() => changeLanguage(language.code)}
          bg="none"
          _hover={{ bg: "none" }}
          borderRight={language.code !== "en" ? "1px solid #666666" : "none"}
          h="11px"
          borderRadius={0}
          color={i18n.language === language.code ? linkColor : "#666666"}
          textDecoration={i18n.language === language.code ? "underline" : "none"}
        >
          {language.label}
        </Button>
      ))}
    </HStack>
  );
};

export default LanguageSwitcher;
