import React from "react";
import { Link, Text } from "@chakra-ui/react";

export const faqData = {
  questionsrepeater: [
    {
      question: "How does the process work?",
      answer:
        "Upon consultations about your project and enrolling it, our team will work with you to understand your vision and create a high-quality final product, professionally edited by our experienced editors.",
    },
    {
      question: "How long does the editing process take?",
      answer:
        "Depending on the complexity of the project and the workload of our editors, this can vary from one day to several days but never later than the agreed deadline.",
    },
    {
      question: "How will I receive my edited video?",
      answer:
        "Once your edit is complete, we'll deliver it to you via a secure download link.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and bank transfer. Client covers the transfer fee.",
    },
    {
      question:
        "What if I need something changed in the video that you have delivered?",
      answer:
        "It is not unusual to have small changes or corrections now and then. These ones are free of charge, however if you request a video to be remade entirely from what was agreed we reserve the right to charge a reasonable amount for extra work or not accept the request.",
    },
    {
      question: "How many videos can you process?",
      answer:
        "We can process a larger number of videos. When it comes to short form vids, on average we take 60 videos monthly per client, however we can deliver more.",
    },
    {
      question: "How do I contact your customer support team?",
      answer: (
        <Text fontWeight={400} fontSize="sm" fontFamily={"PoppinsBlack, sans-serif"}>
          You can contact our customer support team via email at{" "}
          <Link href="mailto:info@fivastudio.com" color="blue.500">
            info@fivastudio.com
          </Link>{" "}
          or even better message us directly on WhatsApp or Viber{" "}
          <Link href="tel:+381621537032" color="blue.500">
            +381 62 1537032
          </Link>
        </Text>
      ),
    },
  ],
};
