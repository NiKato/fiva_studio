import React, { useEffect, useState } from "react"
import "./global.css"
import { Box, Button, ColorModeScript, useColorMode } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Carousel from "../components/Carousel"
import Benefits from "../components/Benefits"
import Headings from "../components/Headings"
import Preloader from "../components/Loading"
import { SEO } from "../components/Seo"
import { HeadProps } from "gatsby"
import BasicStatistics from "../components/LongForm"
import CustomGrid from "../components/CustomGrid"
import FAQ from "../components/FAQ"
import { faqData } from "../constants/faqData"
import Testimonials  from "../components/organisms/Testimonials"
// import Geolocation from "../components/LocationBased"

interface HomePageProps {
  pageContext: {
    language: string
  }
}

const HomePage: React.FC<HomePageProps> = ({ pageContext }) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])
  const { colorMode, toggleColorMode } = useColorMode()

  const { t, i18n } = useTranslation()

  useEffect(() => {
    if (pageContext.language) {
      i18n.changeLanguage(pageContext.language)
    }
  }, [pageContext.language, i18n])

  useEffect(() => {
    if (pageContext.language) {
      i18n.changeLanguage(pageContext.language)
    }
  }, [pageContext.language, i18n])

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <ColorModeScript initialColorMode="light" />

          <Layout>
            <Box
              px={{ base: 4, md: 20 }}
              // bg={colorMode === "dark" ? "#1F1F1F" : "#EBEBEB"}
              // color={colorMode === "dark" ? "white" : "black"}
              h="100%"
            >
              <Hero
                title={t("hero.title")}
                text={t("hero.subtitle")}
                cta={t("hero.cta")}
                cta2={t("hero.cta2")}
              />

              <Benefits />
              <Headings
                spanTitle={"MOST POPULAR"}
                title={"Short Form Content"}
                text={"Click on image for moving forward or backward."}
              />
            </Box>
            <Carousel />
            <Headings
              spanTitle={"TOP RATED"}
              title={"Long Form Content"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet commodo magna, ac volutpat mi."
              }
            />
            <BasicStatistics />
            <Headings
              spanTitle={"MOST REQUESTED"}
              title={"2D Animations"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet commodo magna, ac volutpat mi."
              }
            />
            <CustomGrid />
            <Headings
              spanTitle={"MOST ASKED"}
              title={"Frequently asked questions"}
            />
            <FAQ props={faqData} />
            <Headings
              spanTitle={"WHAT OUR CLIENTS SAY"}
              title={"100+ satisfied clients"}
            />
            <Testimonials />
          </Layout>
        </>
      )}
    </>
  )
}

export default HomePage

export function Head(props: HeadProps) {
  return (
    <SEO
      title="Fiva Studio | Power of 2d Animation videos"
      description="Power of 2d Animation videos"
    />
  )
}
