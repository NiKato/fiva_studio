import React from "react"
import {
  Container,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react"
import bgImg from "../../images/fiva.svg"

const FAQ = ({ props }: FAQProps) => {
  return (
    <Container
      maxW={{ base: "100%", md: "4xl" }}
      mt={5}
      mb={20}
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
      <Accordion w="100%" defaultIndex={[0]} allowToggle position="relative">
        {props.questionsrepeater?.map((item, index) => (
          <AccordionItem w="100%" key={index}>
            <AccordionButton
              justifyContent="space-between"
              fontSize={{ base: "lg", md: "xl" }}
              _hover={{ background: "transparent" }}
            >
              {item.question}
              <AccordionIcon width="1.88rem" height="1.88rem" color="#3377FF" />
            </AccordionButton>
            <AccordionPanel mx={2} fontSize="sm" fontWeight={400}>
              {item.answer}
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
      answer: string
    }[]
  }
}

export default FAQ
