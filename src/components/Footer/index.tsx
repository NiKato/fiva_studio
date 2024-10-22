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
  VStack,
  HStack,
  useColorModeValue,
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
import LocalizedLink from "../LocalizedLink"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { useTranslation } from "react-i18next"

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
    <Text color="#3377FF" fontFamily={"PoppinsBlack"} fontWeight={700} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  )
}

export default function Footer() {
  const { t } = useTranslation();

  const footerLinks = [
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
          templateColumns={{ sm: "1fr 1fr", md: "3fr 2fr 2fr 3fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Image width="116px" h="48px" src={logo} />
            </Box>
            <Text fontSize={"sm"}>{t("footer.copyright")}</Text>
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
              <LocalizedLink to={"about-us"}>{t("header.aboutUs")}</LocalizedLink>
            </Text>
            <Text fontWeight={400}>
              <LocalizedLink to={"contact-us"}>{t("header.contactUs")}</LocalizedLink>
            </Text>
            <Text fontWeight={400}>
              <LocalizedLink to={"contact-us"}>{t("header.services")}</LocalizedLink>
            </Text>
            <Text fontWeight={400}>
              <AnchorLink to={"/#faq"}>{t("header.questions")}</AnchorLink>
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>{t("header.aboutUs")}</ListHeader>
            <Stack>
              {footerLinks.map((link, index) => (
                <Text key={index} fontWeight={400}>
                  <LocalizedLink to={`${link.href}`}>{link.label}</LocalizedLink>
                </Text>
              ))}
            </Stack>
          </Stack>
          <Stack align={"flex-start"} gap={2}>
            <ListHeader>{t("header.contactUs")}</ListHeader>
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
