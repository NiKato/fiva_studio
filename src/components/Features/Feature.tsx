import { Stack, useColorMode, Flex, Text, Heading, Link } from "@chakra-ui/react";
import React from "react"

const Feature = ({ title, text, icon, linkText, linkUrl }: any) => {
    const { colorMode } = useColorMode();
    return (
      <Stack>
        <Flex
          align={"center"}
          justify={"center"}
          rounded={"full"}
          mb={1}
          gap={2}
        >
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

export default Feature