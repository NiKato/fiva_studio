import { useLocation, useSearchParams } from "react-router-dom"
import { Link, Text } from "@chakra-ui/react"

export const useFaqData = () => {
  const location = useLocation()
  const [searchParams] = useSearchParams()

  const path =
    location.pathname.includes("/sr/") || searchParams.has("sr") ? "sr" : "en"

  return {
    questionsrepeater: [
      {
        question: "faq.question8",
        answer:
          path === "en" ? (
            <Text>
              Price of the video depends on its complexity...{" "}
              <Link href="/contact-us" color="blue.500">
                here
              </Link>
            </Text>
          ) : (
            <Text>
              Cena zavisi od kompleksnosti...{" "}
              <Link href="/contact-us" color="blue.500">
                ovde.
              </Link>
            </Text>
          ),
      },
    ],
  }
}
