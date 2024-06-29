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
  Link,
} from "@chakra-ui/react"
import features from "../../constants/features"
import { useTranslation } from "react-i18next"

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
  linkText?: string;
  linkUrl?: string;
}

const Feature = ({ title, text, icon, linkText, linkUrl }: FeatureProps) => {
  const { colorMode } = useColorMode();
  return (
    <Stack>
      <Flex align={"center"} justify={"center"} rounded={"full"} mb={1} gap={2}>
        <Text color="#477EEB">{icon}</Text>
        <Heading as="h3" fontSize={"2xl"} fontWeight={700}>
          {title}
        </Heading>
      </Flex>
      <Text as="p" mx="auto" textAlign="center" fontSize="lg">
        {text}
        {linkText && linkUrl && (
          <Link rel="preload" href={linkUrl} color="#477EEB">
            {linkText}
          </Link>
        )}
      </Text>
    </Stack>
  );
};

const Benefits = () => {
  const { t } = useTranslation();
  return (
    <Box py={5}>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
        {features.features.map((feature, index) => (
          <Feature
            key={index}
            icon={<Icon as={feature.icon} width={6} height={6} />}
            title={t(feature.title)}
            text={t(feature.text)}
            linkText={feature.linkText ? t(feature.linkText) : undefined}
            linkUrl={feature.linkUrl}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Benefits;