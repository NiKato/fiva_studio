import React from "react"
import {
  Container,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Heading,
  Link,
} from "@chakra-ui/react"
import bgImg from "../../images/fiva.svg"
import { Trans, useTranslation } from "react-i18next"
import { ReactNode } from "react"

const FAQ = ({ props, isFaqPage }: FAQProps) => {
  const { t } = useTranslation()

  // Helper function to determine if an item is a React element
  const isReactElement = (element: any): element is ReactNode => {
    return React.isValidElement(element)
  }

  return (
    <Container
      maxW={{ base: "100%", md: "4xl" }}
      pt={5}
      pb={10}
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: "-32px",
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        filter: "blur(30px)",
        zIndex: -1,
        opacity: 1,
        overflow: "hidden",
      }}
    >
      {isFaqPage && (
        <Heading
          as="h2"
          textAlign={"center"}
          p={0}
          fontFamily={"PoppinsBlack"}
          fontSize={{ base: "30px", md: "42px" }}
          fontWeight={700}
          my={10}
        >
          {t("headings.title5")}
        </Heading>
      )}
      <Accordion w="100%" defaultIndex={[0]} allowToggle position="relative">
        {props.questionsrepeater?.map((item, index) => (
          <AccordionItem w="100%" key={index}>
            <AccordionButton
              justifyContent="space-between"
              fontSize={{ base: "lg", md: "xl" }}
              _hover={{ background: "transparent" }}
            >
              {t(item.question)}
              <AccordionIcon width="1.88rem" height="1.88rem" color="#3377FF" />
            </AccordionButton>
            <AccordionPanel mx={2} fontSize="sm" fontWeight={400}>
              {isReactElement(item.answer) ? (
                item.answer
              ) : (
                <Trans
                  i18nKey={item.answer}
                  components={{
                    1: <Link href="/contact-us" color="blue.500" />,
                    3: <Link href="tel:+381621537032" color="blue.500" />,
                  }}
                />
              )}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  )
}

type FAQProps = {
  props: {
    questionsrepeater: {
      question: string
      answer: string | ReactNode
    }[]
  }
  isFaqPage?: boolean
}

export default FAQ
