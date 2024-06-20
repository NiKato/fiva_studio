import React, { useEffect, useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { PhoneIcon } from "@chakra-ui/icons"

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
} from "@chakra-ui/react"

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
      // useForm("xwpeekpd")
    }
  }, [formErrors])

  const validate = (values: any) => {
    type errorType = {
      fullName?: string
      message?: string
    }
  }

  return (
    <>
      <Container maxW="7xl" py={20}>
        <Flex
          direction={{ base: "column", md: "row" }}
          p={8}
          gap={8}
          alignItems="center"
          justifyContent="center"
        >
          <Box flex="1" p={4} bg="gray.100" borderRadius="md">
            <Heading as="h2" size="lg" mb={4}>
              Need Anything?
            </Heading>
            <Text fontSize="xl" mb={4}>
              Email us:
            </Text>
            <Text fontSize="lg" mb={2}>
              info@fivastudio.com
            </Text>
            <Text fontSize="xl" mb={4}>
              Monday to Friday
            </Text>
            <Text fontSize="lg">9AM - 5PM EST</Text>
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
                  <Input
                    variant="outline"
                    size="lg"
                    placeholder="John Doe"
                    id="fullName"
                    name="fullName"
                    type="text"
                    defaultValue={formValues.fullName}
                    onChange={handleChange("fullName")}
                  />
                  <ValidationError
                    prefix="FullName"
                    field="fullName"
                    errors={state.errors}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Phone Number</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<PhoneIcon color="gray.300" />}
                    />
                    <Input
                      id="phone"
                      name="phone"
                      variant="outline"
                      size="lg"
                      placeholder="00 38 69 123 456 789"
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
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    variant="outline"
                    size="lg"
                    placeholder="johndoe@email.com"
                    defaultValue={formValues.email}
                    onChange={handleChange("email")}
                  />
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
                    placeholder="Text Area"
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
