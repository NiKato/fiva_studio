import React, { ReactNode } from "react"
import {
  Box,
  chakra,
  Image,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  VStack,
  HStack,
} from "@chakra-ui/react"
import logo from "../../images/logo.png"
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaViber,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa"

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text color="#3377FF" fontWeight={700} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  )
}

export default function Footer() {
  const footerLinks = [
    { label: "Short Form", href: "/short-form" },
    { label: "Podcasts", href: "/podcasts" },
    { label: "Meme Videos", href: "/meme-videos" },
    { label: "2d Animation", href: "/2d-animations" },
    { label: "Youtube Videos", href: "/" },
    { label: "Educational Videos", href: "/educational-videos" },
    { label: "Corporate Videos", href: "/" },
    { label: "Content for Children", href: "/content-for-children" },
    { label: "Food and Hospitality", href: "/" },
    { label: "Film / Documentary", href: "/" },
    { label: "Ecology Videos", href: "/ecology-videos" },
    { label: "Wedding Videos", href: "/wedding-videos" },
  ]

  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        mx={{ base: 6, md: "auto" }}
        w={{ base: "auto", md: "7xl" }}
        maxW={{ base: "auto", md: "7xl" }}
        py={10}
      >
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Image width="116px" h="48px" src={logo} />
            </Box>
            <Text fontSize={"sm"}>© 2024 Fiva Studio. All rights reserved</Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Instagram"} href={"https://www.instagram.com/fiva_studio/"}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton
                label={"Tik Tok"}
                href={""}
              >
                <FaTiktok />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Fiva Studio</ListHeader>
            <Text fontWeight={400}>
              <Link href={"/about-us"}>About us</Link>
            </Text>
            <Text fontWeight={400}>
              <Link href={"/contact-us"}>Contact us</Link>
            </Text>
            <Text fontWeight={400}>
              <Link href={"/contact-us"}>Pricing</Link>
            </Text>
            <Text fontWeight={400}>
              <Link href={"/#faq"}>Questions</Link>
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Services</ListHeader>
            <Stack>
              {footerLinks.map((link, index) => (
                <Text key={index} fontWeight={400}>
                  <Link href={link.href}>{link.label}</Link>
                </Text>
              ))}
            </Stack>
          </Stack>
          <Stack align={"flex-start"} gap={2}>
            <ListHeader>Contact Us</ListHeader>
            <VStack alignItems="flex-start">
              <HStack>
                <FaWhatsapp
                  fill="#48C355"
                  size={24}
                  style={{ marginRight: "8px" }}
                />
                <Text>+381 62 1537032</Text>
              </HStack>
              <HStack>
                <FaViber
                  fill="#7360f2"
                  size={24}
                  style={{ marginRight: "8px" }}
                />
                <Text>+381 62 1537032</Text>
              </HStack>
              <HStack>
                <FaEnvelope size={24} style={{ marginRight: "8px" }} />
                <Link href="mailto:info@fivastudio.com">
                  info@fivastudio.com
                </Link>
              </HStack>
            </VStack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
