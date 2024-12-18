import React from "react"
import { Link, Text } from "@chakra-ui/react"

const path =
  typeof window !== "undefined" &&
  (window.location.pathname.includes("/sr/") ||
    new URLSearchParams(window.location.search).has("sr"))
    ? "sr"
    : "en"

export const faqData = {
  questionsrepeater: [
    {
      question: "faq.question",
      answer: "faq.answer",
    },
    {
      question: "faq.question2",
      answer: "faq.answer2",
    },
    {
      question: "faq.question3",
      answer: "faq.answer3",
    },
    {
      question: "faq.question4",
      answer: "faq.answer4",
    },
    {
      question: "faq.question5",
      answer: "faq.answer5",
    },
    {
      question: "faq.question6",
      answer: "faq.answer6",
    },
    {
      question: "faq.question7",
      answer:
        path === "en" ? (
          <>
            <Text
              fontWeight={400}
              fontSize="sm"
              fontFamily={"PoppinsBlack, sans-serif"}
            >
              You can contact our customer support team via email at{" "}
              <Link href="mailto:info@fivastudio.com" color="blue.500">
                info@fivastudio.com
              </Link>{" "}
              or even better message us directly on WhatsApp or Viber{" "}
              <Link href="tel:+381621537032" color="blue.500">
                +381 62 1537032
              </Link>
            </Text>
          </>
        ) : (
          <>
            <Text
              fontWeight={400}
              fontSize="sm"
              fontFamily={"PoppinsBlack, sans-serif"}
            >
              Možete kontaktirati naš tim za korisničku podršku putem emaila na{" "}
              <Link href="mailto:info@fivastudio.com" color="blue.500">
                info@fivastudio.com
              </Link>{" "}
              ili još bolje, porukom direktno putem WhatsApp-a ili Vibera na{" "}
              <Link href="tel:+381621537032" color="blue.500">
                +381 62 1537032
              </Link>
            </Text>
          </>
        ),
    },
  ],
}
