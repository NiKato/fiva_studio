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
  Image,
  Link,
  Divider,
} from "@chakra-ui/react"

import { Bg } from "../Bg"

export default function ContactForm() {
  var toast = useToast()

  const [state, handleSubmit] = useForm("xwpeekpd")

  if (state.succeeded) {
    toast({
      status: "success",
      title: "Message was sent!",
    })
  }

  // Initial values + setting new ones by typing in input
  const [formValues, setFormValues] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  })

  // Error fields
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
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // Handle form submission here if needed
    }
  }, [formErrors])

  const validate = (values: any) => {
    // Define your validation rules here if needed
  }

  return (
    <>
      {/* Bg component as background */}
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

      <Container maxW="7xl" py={20} pos="relative">
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
            <Heading as="h2" size="lg" mb={4}>
              Need Anything?
            </Heading>
            <Text fontSize="xl" mb={4}>
              Email us:
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
              or Text us at:
            </Text>
            <Link
              fontWeight={600}
              fontSize="lg"
              mb={2}
              href="tel: +381621537032"
            >
              +38162 153 70 32
            </Link>
            <Text fontSize="xl" mt={6}>
              Feel free to contact us!
            </Text>
          </Box>
          <Box flex="2" p={4}>
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="stretch">
                <Box textAlign="center" mb={4}>
                  <Heading as="h2" size="lg">
                    Contact Us
                  </Heading>
                </Box>

                <FormControl isRequired>
                  <FormLabel>Full Name</FormLabel>
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
                      placeholder="Your name"
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
                  <FormLabel>Phone Number</FormLabel>
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
                  <FormLabel>Email</FormLabel>
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
                      placeholder="your@email.com"
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
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    id="message"
                    name="message"
                    variant="outline"
                    size="lg"
                    placeholder="Write to us"
                    defaultValue={formValues.message}
                    onChange={handleChange("message")}
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </FormControl>

                <Box
                  className="g-recaptcha"
                  data-sitekey="6LejFiskAAAAAKBm9Bbgcl_b3kQrYtrgpjbyXF2W"
                >
                  <ValidationError
                    prefix="Captcha"
                    field="captcha"
                    errors={state.errors}
                  />
                </Box>

                <Button
                  variant="solid"
                  colorScheme="blue"
                  type="submit"
                  isLoading={state.submitting}
                >
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>
        </Flex>
      </Container>
    </>
  )
}
