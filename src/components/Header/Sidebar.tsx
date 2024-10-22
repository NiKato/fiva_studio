import React from "react";
import { Box, Button, Stack, Image } from "@chakra-ui/react";
import logo from "../../images/logo.png";
import { DocumentSidebar } from "./DocumentSidebar";
import LocalizedLink from "../LocalizedLink";
import { useTranslation } from "react-i18next";

export const Sidebar = () => {
  const { t } = useTranslation();

  const links = [
    { href: "/", label: t("header.home") },
    { href: "/about-us", label: t("header.aboutUs") },
    { href: "/#faq", label: t("header.questions") },
    { href: "/contact-us", label: t("header.contactUs") },
  ];

  return (
    <Box
      as="nav"
      position="fixed"
      left={0}
      top={0}
      bottom={0}
      w="260px"
      p={4}
      boxShadow="2xl"
      zIndex={1000}
      overflowY="auto"
      height="100vh"
      display={{ base: "none", md: "block" }}
      sx={{
        "&::-webkit-scrollbar": {
          width: "2px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#3377FF",
          borderRadius: "4px",
        },
     
        scrollbarColor: "#3377FF #f0f0f0",
      }}
    >
      <Stack spacing={4}>
        <LocalizedLink to="">
          <Image width="72px" h="36px" src={logo} alt="Logo" />
        </LocalizedLink>
        {links.map((link, index) => (
          <React.Fragment key={link.href}>
            <LocalizedLink to={`.${link.href}`}>
              <Button
                variant="ghost"
                justifyContent="start"
                w="full"
                fontWeight={600}
                colorScheme="black"
                bg="transparent"
                _hover={{ textDecoration: "underline", color: "#3377FF" }}
              >
                {link.label}
              </Button>
            </LocalizedLink>
            {index === 0 && <DocumentSidebar />}
          </React.Fragment>
        ))}
      </Stack>
    </Box>
  );
};
