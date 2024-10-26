import React, { useEffect, useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { PhoneIcon, EmailIcon, InfoOutlineIcon } from "@chakra-ui/icons"

// Chakra UI components
import {
  Box,
  Heading,
  Input,
  Textarea,
  Button,
  useToast,
  InputGroup,
  InputLeftElement,
  FormControl,
  FormLabel,
  VStack,
  Flex,
  Text,
  Container,
  Link,
  Divider,
  HStack,
} from "@chakra-ui/react"

import { Bg } from "../Bg"
import { useTranslation } from "react-i18next"
import { FaWhatsapp, FaViber } from "react-icons/fa"

export default function ContactForm({ showBackground = false }) {
  const { t } = useTranslation()
  var toast = useToast()

  const [state, handleSubmit] = useForm("xwpeekpd")

  if (state.succeeded) {
    toast({
      status: "success",
      title: "Message was sent!",
    })
  }

  const [formValues, setFormValues] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  })

  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (input: any) => (e: any) => {
    const value = e.currentTarget.value

    setFormValues(prevState => ({
      ...prevState,
      [input]: value,
    }))
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // Handle form submission here if needed
    }
  }, [formErrors])

  const validate = (values: any) => {
    // Define your validation rules here if needed
  }

  return (
    <>
      {showBackground && (
        <Box
          pos="absolute"
          top="0"
          left="0"
          zIndex="-1"
          width="100%"
          height="100%"
          filter={"blur(1px)"}
        >
          <Bg />
        </Box>
      )}

      <Container maxW="7xl" py={10} pos="relative">
        <Flex
          direction={{ base: "column", md: "row" }}
          p={8}
          gap={8}
          alignItems="center"
          justifyContent="center"
          position="relative"
        >
          <Box
            flex="1"
            p={4}
            borderRadius="lg"
            bg="rgba(255, 255, 255, 0.2)"
            boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          >
            <Heading as="h2" fontFamily={"PoppinsBlack"} size="lg" mb={4}>
              {t("contact.heading")}
            </Heading>
            <Text fontSize="xl" mb={4}>
              {t("contact.email")}
            </Text>
            <Link
              fontWeight={600}
              href="mailto: info@fivastudio.com"
              fontSize="lg"
              mb={2}
            >
              info@fivastudio.com
            </Link>
            <Divider my={4} bg="#3377FF" />
            <Text fontSize="xl" mb={4}>
              {t("contact.text")}
            </Text>
            <Link
              fontWeight={600}
              fontSize="lg"
              mb={2}
              href="tel: +381621537032"
            >
              <PhoneIcon style={{ marginRight: "16px" }} /> +38162 153 70 32
            </Link>
            <HStack fontWeight={600} fontSize="lg" mt={2}>
              <FaWhatsapp
                fill="#48C355"
                size={24}
                style={{ marginRight: "8px" }}
              />
              <Link
                fontWeight={600}
                fontSize="lg"
                mb={2}
                href="https://wa.me/381621537032" // WhatsApp link
                isExternal // Otvara se u WhatsApp aplikaciji ili na vebu
              >
                +38162 153 70 32
              </Link>
            </HStack>
            <HStack mb={2}>
              <FaViber
                fill="#7360f2"
                size={24}
                style={{ marginRight: "8px" }}
              />
              <Link
                fontWeight={600}
                fontSize="lg"
                mb={2}
                href="viber://chat?number=381621537032" // Viber link
                isExternal // Otvara se u Viber aplikaciji
              >
                +38162 153 70 32
              </Link>
            </HStack>

            <Text fontSize="xl" mt={6}>
              {t("contact.contactUs")}
            </Text>
          </Box>
          <Box flex="2" p={4}>
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="stretch">
                <Box textAlign="center" mb={4}>
                  <Heading as="h2" fontFamily={"PoppinsBlack"} size="lg">
                    {t("contact.title")}
                  </Heading>
                </Box>

                <FormControl isRequired>
                  <FormLabel>{t("contact.fullname")}</FormLabel>
                  <InputGroup
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <InputLeftElement
                      pt={2}
                      pointerEvents="none"
                      children={<InfoOutlineIcon />}
                    />
                    <Input
                      variant="outline"
                      size="lg"
                      placeholder={t("contact.fplaceholder")}
                      id="fullName"
                      name="fullName"
                      type="text"
                      defaultValue={formValues.fullName}
                      onChange={handleChange("fullName")}
                    />
                  </InputGroup>
                  <ValidationError
                    prefix="FullName"
                    field="fullName"
                    errors={state.errors}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>{t("contact.phone")}</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pt={2}
                      pointerEvents="none"
                      children={<PhoneIcon />}
                    />
                    <Input
                      id="phone"
                      name="phone"
                      variant="outline"
                      size="lg"
                      placeholder="+123 456 789"
                      type="number"
                      defaultValue={formValues.phone}
                      onChange={handleChange("phone")}
                    />
                  </InputGroup>
                  <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>{t("contact.mail")}</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pt={2}
                      pointerEvents="none"
                      children={<EmailIcon />}
                    />
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      variant="outline"
                      size="lg"
                      placeholder={t("contact.eplaceholder")}
                      defaultValue={formValues.email}
                      onChange={handleChange("email")}
                    />
                  </InputGroup>
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>{t("contact.textarea")}</FormLabel>
                  <Textarea
                    id="message"
                    name="message"
                    variant="outline"
                    size="lg"
                    placeholder={t("contact.tplaceholder")}
                    defaultValue={formValues.message}
                    onChange={handleChange("message")}
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </FormControl>

                <Button
                  variant="solid"
                  colorScheme="blue"
                  type="submit"
                  isLoading={state.submitting}
                >
                  {t("contact.btn")}
                </Button>
              </VStack>
            </form>
          </Box>
        </Flex>
      </Container>
    </>
  )
}
