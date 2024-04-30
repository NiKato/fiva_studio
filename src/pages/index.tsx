import React, { useEffect } from "react"
import { Box, useColorMode } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import LanguageSwitcher from "../components/LanguageSwitcher"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Carousel from "../components/Carousel"
import Benefits from "../components/Benefits"

interface HomePageProps {
  pageContext: {
    language: string
  }
}

const HomePage: React.FC<HomePageProps> = ({ pageContext }) => {
  const { colorMode } = useColorMode()
  const { t, i18n } = useTranslation()

  useEffect(() => {
    if (pageContext.language) {
      i18n.changeLanguage(pageContext.language)
    }
  }, [pageContext.language, i18n])

  return (
    <>
      <Layout>
        <Box
          px={20}
          bg={colorMode === "dark" ? "#262626" : "#EAEAEC"}
          color={colorMode === "dark" ? "white" : "black"}
          h="100%"
        >
          <Hero />
          <Benefits />
        </Box>
          <Carousel bg={colorMode === "dark" ? "#262626" : "#EAEAEC"} />
      </Layout>
    </>
  )
}

export default HomePage
