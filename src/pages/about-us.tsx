import React from "react"
import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { MdKeyboardArrowDown } from "react-icons/md"

import { HeadProps } from "gatsby"
import { SEO } from "../components/Seo"

const About = () => (
  <>
    <Layout>
      <Box position="relative" height={{ base: "100vh", md: "60vh" }}>
        <StaticImage
          alt="Placeholder Image"
          src="../images/about.webp"
          objectFit="cover"
          objectPosition="center -140px"
          style={{
            filter: "blur(10px)",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
        <Container
          maxW="container.xl"
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <VStack textAlign="center" alignItems="center">
            <Heading
              w={{ base: "90%", md: "600px" }}
              size={{ base: "2xl", md: "4xl" }}
              mb="8"
              color={useColorModeValue("#fff", "#fff")}
            >
              About Fiva Studio
            </Heading>
            <AnchorLink to="#about">
              <MdKeyboardArrowDown color="#fff" size="40px" />
            </AnchorLink>
          </VStack>
        </Container>
      </Box>
      <Container maxW="container.xl" p={{ base: "4", md: "12" }}>
        <Heading as="h2" pb={5}>
          Our Story
        </Heading>
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
          gap={10}
          id="about"
        >
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center"
          >
            <Box
              width={{ base: "100%", sm: "85%" }}
              zIndex="2"
              marginLeft={{ base: "0", sm: "5%" }}
              marginTop="5%"
            >
              <Image src={"https://fivastudio.b-cdn.net/hero.webp"} w={{ base: "100%", sm: "540px" }} filter="blur(10px)" />
            </Box>
            <Box
              zIndex="1"
              width="100%"
              position="absolute"
              top="-20px"
              height="100%"
            >
              <Box
                bgGradient={useColorModeValue(
                  "radial(#3377FF 2px, transparent 1px)",
                  "radial(#3377FF 2px, transparent 1px)"
                )}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
              />
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "3", sm: "0" }}
          >
            <Heading marginTop="1">
              <Link
                textDecoration="none"
                fontSize="4xl"
                _hover={{ textDecoration: "none" }}
              >
                We're a team of experienced video editors
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              fontSize="lg"
            >
              You own a marketing agency, or you're SMM or a content creator
              that needs someone to process their content and deliver tailored
              short form videos for yourself or your clients?
            </Text>
          </Box>
        </Box>

        <Divider marginTop="5" />

        <VStack paddingTop="40px" spacing={10} alignItems="flex-start">
          <Heading as="h2">Who are we</Heading>
          <Text as="p" fontSize="lg">
            We're a team of experienced video editors who also have experience
            in managing social media accounts, digital marketing and content
            creation, so we understand your needs and importance of having a
            reliable editor who understands the vision behind your or your
            client's project.
          </Text>
          <Text as="p" fontSize="lg">
            We're here to process your videos for you and deliver them under
            agreed deadlines. How does the process work?
          </Text>
          <Text as="p" fontSize="lg">
            We organize a quick meeting where we discuss video content that
            needs to be made, how it should look like, project specifics like
            general vibe, quantity, price, deadlines etc.
          </Text>
          <Text as="p" fontSize="lg">
            Upon our meeting, if the type of project is something that we do and
            if we can accommodate and commit to it, we assign best editors for
            your project / niche.
          </Text>
          <Text as="p" fontSize="lg">
            Our edits may vary from what we call 'industry standard' to 'next
            level edits', thus we can accommodate different request, lower or
            higher budget. Please see below some of our edits:
          </Text>
        </VStack>
      </Container>
    </Layout>
  </>
)

export default About

export function Head(props: HeadProps) {
  return (
    <SEO
      title="Fiva Studio | About"
      description="team of experienced video editors"
    />
  )
}