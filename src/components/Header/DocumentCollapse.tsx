import React from "react";
import { Button, Collapse, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { PopoverIcon } from "./PopoverIcon";
import LocalizedLink from "../LocalizedLink";
import { useTranslation } from "react-i18next";

export const DocumentCollapse = () => {
  const { t } = useTranslation();
  const isOpen = true; 

  return (
    <>
      <Button
        justifyContent="space-between"
        variant="tertiary"
        size="lg"
        disabled 
      >
        <Text as="span">{t("header.services")}</Text>
        <PopoverIcon isOpen={isOpen} />
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Stack spacing="1" alignItems="stretch" ps="4">
          {[
            { label: t("shortForm.title"), href: "short-form" },
            { label: t("podcast.title"), href: "podcasts" },
            { label: t("cardTitles.meme"), href: "meme-videos" },
            { label: t("animation.title"), href: "2d-animations" },
            { label: t("education.title"), href: "educational-videos" },
            { label: t("corporate.title"), href: "corporate-videos" },
            { label: t("contentFC.title"), href: "content-for-children" },
            { label: t("food.title"), href: "food-and-hospitality" },
            { label: t("ecology.title"), href: "ecology-videos" },
            { label: t("wedding.title"), href: "wedding-videos" },
          ].map((item) => (
            <LocalizedLink key={item.label} to={`${item.href}`}>
              <Button
                variant="tertiary"
                justifyContent="start"
                _hover={{ textDecoration: "underline", color: "#3377FF" }}
              >
                {item.label}
              </Button>
            </LocalizedLink>
          ))}
        </Stack>
      </Collapse>
    </>
  );
};
