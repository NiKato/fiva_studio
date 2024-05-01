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

interface FeatureProps {
  title: string
  text: string
  icon: ReactElement
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  const { colorMode } = useColorMode()
  return (
    <Stack>
      <Flex
        align={"center"}
        justify={"center"}
        rounded={"full"}
        color="#477EEB"
        mb={1}
        gap={2}
      >
        {icon}
        <Heading
          color={colorMode === "dark" ? "white" : "black"}
          fontSize={"2xl"}
          fontWeight={700}
        >
          {title}
        </Heading>
      </Flex>
      <Text mx="auto" textAlign="center" fontSize="sm" color={colorMode === "dark" ? "#dadada" : "black"}>
        {text}
      </Text>
    </Stack>
  )
}

export default function Benefits() {
  return (
    <Box py={20}>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={3.5}>
        <Feature
          icon={<Icon as={MdOutlineLocalMovies} width={6} height={6} />}
          title={"Lifetime Support"}
          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}
        />
        <Feature
          icon={<Icon as={MdOutlineLocalFireDepartment} width={6} height={6} />}
          title={"Unlimited Donations"}
          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}
        />
        <Feature
          icon={<Icon as={MdOutlineFlag} width={6} height={6} />}
          title={"Instant Delivery"}
          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}
        />
        <Feature
          icon={<Icon as={MdLightbulbOutline} width={6} height={6} />}
          title={"Instant Delivery"}
          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}
        />
      </SimpleGrid>
    </Box>
  )
}
