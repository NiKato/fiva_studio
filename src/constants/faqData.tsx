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
      question: "faq.question8",
      answer: "faq.answer8",
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
      answer: "faq.answer7",
    },
  ],
}
