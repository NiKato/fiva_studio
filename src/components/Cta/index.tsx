import React from "react"
import { Text, Link, HStack } from "@chakra-ui/react"
import LocalizedLink from "../LocalizedLink"
import { useTranslation } from "react-i18next"

const Cta = () => {
  const { t } = useTranslation()

  return (
    <HStack>
      <Text
        as="p"
        fontSize={{ base: "md", md: "lg" }}
        fontWeight={600}
        p={8}
        color="#fff"
        bg="#3377FF"
        borderRadius="md"
      >
        {t("pageHero.question")}
          <LocalizedLink to="contact-us">
            {t("pageHero.question2")}
          </LocalizedLink>
        {t("pageHero.question3")}
      </Text>
    </HStack>
  )
}

export default Cta
