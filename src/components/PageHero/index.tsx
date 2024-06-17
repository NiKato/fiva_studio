import React from "react"
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  useColorMode,
} from "@chakra-ui/react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { MdKeyboardArrowDown } from "react-icons/md"

export const PageHero = ({ title, subtitle }: any) => {
  return (
    <Box
      as="section"
      bg="linear-gradient(to bottom, #8c9bb8, #171923)"
      py={{ base: 10, md: 9 }}
      minH={{ base: "auto", md: "80vh" }}
      display="flex"
      alignItems="center"
      justifyContent='center'
    >
      <Container w={{ base: "100%", md: "7xl" }} mt={20}>
        <Stack
          spacing={{ base: "4", md: "6" }}
          align="center"
          textAlign="center"
        >
          <Stack spacing="3" pos="relative">
            <Heading
              size={{ base: "xl", md: "3xl" }}
              fontWeight="semibold"
              color="white"
            >
              {title}
            </Heading>
          </Stack>
          <Text fontSize={{ base: "md", md: "xl" }} maxW="3xl" color="white">
            {subtitle}
          </Text>
          <AnchorLink to="#text">
            <Button
              size={{ base: "md", md: "lg" }}
              color="#BB7954"
              variant="ghost"
              rightIcon={<MdKeyboardArrowDown />}
            >
              Find Out More
            </Button>
          </AnchorLink>
        </Stack>
      </Container>
    </Box>
  )
}
