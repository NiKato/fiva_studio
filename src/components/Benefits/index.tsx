import React from "react"
import { ReactElement } from "react"
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Heading,
  useColorMode,
} from "@chakra-ui/react"
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc"
import {
  MdOutlineFlag,
  MdOutlineLocalFireDepartment,
  MdOutlineLocalMovies,
  MdLightbulbOutline,
} from "react-icons/md"

import { useTranslation } from "react-i18next"

interface FeatureProps {
  title: string
  text: string
  icon: ReactElement
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  const { colorMode } = useColorMode()
  return (
    <Stack>
      <Flex align={"center"} justify={"center"} rounded={"full"} mb={1} gap={2}>
        <Text color="#477EEB">{icon}</Text>
        <Heading fontSize={"xl"} fontWeight={700}>
          {title}
        </Heading>
      </Flex>
      <Text mx="auto" textAlign="center" fontSize="sm">
        {text}
      </Text>
    </Stack>
  )
}

export default function Benefits() {
  const { t } = useTranslation()
  return (
    <Box py={20}>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={3.5}>
        <Feature
          icon={<Icon as={MdOutlineLocalMovies} width={6} height={6} />}
          title={t("features.title")}
          text={t("features.text")}
        />
        <Feature
          icon={<Icon as={MdOutlineLocalFireDepartment} width={6} height={6} />}
          title={t("features.title2")}
          text={t("features.text2")}
        />
        <Feature
          icon={<Icon as={MdOutlineFlag} width={6} height={6} />}
          title={t("features.title3")}
          text={t("features.text3")}
        />
        <Feature
          icon={<Icon as={MdLightbulbOutline} width={6} height={6} />}
          title={t("features.title4")}
          text={t("features.text4")}
        />
      </SimpleGrid>
    </Box>
  )
}
