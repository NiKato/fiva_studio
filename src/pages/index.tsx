import React, { useEffect, useRef, useState } from "react"

import "./global.css"
import { Box, ColorModeScript, useColorMode } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Carousel from "../components/Carousel"
import Benefits from "../components/Features"
import Headings from "../components/Headings"
import { SEO } from "../components/Seo"
import { HeadProps } from "gatsby"
import CustomGrid from "../components/CustomGrid"
import LongForm from "../components/LongForm"
import FAQ from "../components/FAQ"
import { faqData } from "../constants/faqData"
import { getHeadingById } from "../constants/headings"
import styled from "styled-components"
import ContactForm from "../components/ContactForm"

// import Geolocation from "../components/LocationBased"

interface HomePageProps {
  pageContext: {
    language: string
  }
}

const Div = styled.div`
  .container {
    --uib-size: 80px;
    --uib-color: #477eeb;
    --uib-speed: 1.75s;
    --uib-stroke: 5px;
    --uib-bg-opacity: 0.1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--uib-stroke);
    width: var(--uib-size);
    border-radius: calc(var(--uib-stroke) / 2);
    overflow: hidden;
    transform: translate3d(0, 0, 0);
  }

  .container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--uib-color);
    opacity: var(--uib-bg-opacity);
    transition: background-color 0.3s ease;
  }

  .container::after {
    content: "";
    height: 100%;
    width: 100%;
    border-radius: calc(var(--uib-stroke) / 2);
    animation: wobble var(--uib-speed) ease-in-out infinite;
    transform: translateX(-95%);
    background-color: var(--uib-color);
    transition: background-color 0.3s ease;
  }

  @keyframes wobble {
    0%,
    100% {
      transform: translateX(-95%);
    }
    50% {
      transform: translateX(95%);
    }
  }
`

const HomePage: React.FC = () => {
  const faqRef = useRef<HTMLDivElement>(null) // ref za FAQ sekciju
  const [loading, setLoading] = useState(true)
  const { colorMode } = useColorMode()
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [])

  // Funkcija za skrolovanje do ref-a
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (
        window.location.hash === "/#faq" &&
        window.location.pathname === "/"
      ) {
        scrollToSection(faqRef)
      }
    }
  }, [])

  const renderHeading = (id: number) => {
    const headingData = getHeadingById(id)
    return headingData ? (
      <Headings
        key={headingData.id}
        id={headingData.id}
        spanTitle={t(headingData.spanTitle)}
        title={t(headingData.title)}
        text={t(headingData.text)}
      />
    ) : null
  }

  return (
    <>
      <>
        <ColorModeScript initialColorMode="dark" />
        <Layout>
          <Box px={{ base: 4, md: 10 }} h="100%">
            <Hero
              title={t("hero.title")}
              text={t("hero.subtitle")}
              cta={t("hero.cta")}
              cta2={t("hero.cta2")}
            />
            <Benefits />
            {/* {renderHeading(1)} */}
          </Box>
          {/* <Box>
            <Carousel />
          </Box> */}
          <Box mb={10}>
            {renderHeading(2)}
            <Box id="work"></Box>
            <CustomGrid />
          </Box>
          <LongForm />
          <Box>{renderHeading(5)}</Box>
          {/* @ts-ignore */}
          <FAQ id="faq" ref={faqRef} props={faqData} />
          {/* {renderHeading(4)}
            <Testimonials /> */}
          <ContactForm showBackground={false} />
        </Layout>
      </>
    </>
  )
}

export default HomePage

export function Head(props: HeadProps) {
  return (
    <SEO
      title="Fiva Studio | Your trusted video editor"
      description="Video editing services for your business and personal projects."
    />
  )
}
