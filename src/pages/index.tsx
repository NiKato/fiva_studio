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
import Testimonials from "../components/organisms/Testimonials"
import { HEADINGS_SORT_ITEMS, getHeadingById } from "../constants/headings"

// import Geolocation from "../components/LocationBased"

interface HomePageProps {
  pageContext: {
    language: string
  }
}

const HomePage: React.FC<HomePageProps> = ({ pageContext }) => {
  // const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setLoading(false)
  //   }, 3000)

  //   return () => clearTimeout(timeout)
  // }, [])
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

  const renderHeading = (id: number) => {
    const headingData = getHeadingById(id)
    return headingData ? (
      <Headings
        key={headingData.id}
        id={headingData.id}
        spanTitle={headingData.spanTitle}
        title={headingData.title}
        text={headingData.text}
      />
    ) : null
  }

  return (
    <>
      {/* {loading ? (
        <Preloader />
      ) : ( */}
      <>
        <ColorModeScript initialColorMode="light" />

        <Layout>
          <Box px={{ base: 4, md: 20 }} h="100%">
            <Hero
              title={t("hero.title")}
              text={t("hero.subtitle")}
              cta={t("hero.cta")}
              cta2={t("hero.cta2")}
            />
            <Benefits />
            <Box id="anchor">{renderHeading(1)}</Box>
          </Box>
          <Carousel />
          {renderHeading(2)}
          <BasicStatistics />
          {renderHeading(3)}
          <CustomGrid />
          <Box id="faq">{renderHeading(5)}</Box>
          <FAQ props={faqData} />
          {renderHeading(4)}
          <Testimonials />
        </Layout>
      </>
      {/* )} */}
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
