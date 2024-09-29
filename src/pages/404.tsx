import React from "react";
import Layout from "../components/Layout";
import { HeadProps, Link } from "gatsby";
import { SEO } from "../components/Seo";
import { Bg } from "../components/Bg";
import { Box, Button, Container, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import LocalizedLink from "../components/LocalizedLink";

const Contact = () => {
  const buttonBg = useColorModeValue("blue.500", "blue.200");
  const buttonColor = useColorModeValue("white", "black");

  return (
    <Layout>
      <Box
        pos="absolute"
        top="0"
        left="0"
        zIndex="-1"
        width="100%"
        height="100vh"
        filter={"blur(1px)"}
        overflow="hidden"
      >
        <Bg />
      </Box>
      <Container
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        maxW="7xl"
      >
        <Stack gap={5} textAlign="center">
          <Heading as="h1" fontSize={{ base: "7xl", md: "8xl" }}>
            404
          </Heading>
          <Text fontSize={{ base: "2xl", md: "5xl" }} fontFamily="PoppinsBlack" fontWeight={700}>
            Uh-oh! Video Not Found
          </Text>
          <Text fontSize={{ base: "lg", md: "2xl" }}>
            Looks like this video didn't make the final cut. <br /> Don't worry,
            there's plenty more to see:
          </Text>
          <LocalizedLink to="">
            <Button mt={4} bg={buttonBg} color={buttonColor}>
              Return to Home Page
            </Button>
          </LocalizedLink>
        </Stack>
      </Container>
    </Layout>
  );
};

export default Contact;

export function Head(props: HeadProps) {
  return (
    <SEO
      title="Fiva Studio | Not Found"
      description="Your trusted video editor, team of experienced video editors"
    />
  );
}
