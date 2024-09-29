// src/pages/educational-videos.tsx
import React from "react";
import PageTemplate from "../components/templates/PageTemplate";
import { Text } from "@chakra-ui/react";
import { HeadProps } from "gatsby";
import { SEO } from "../components/Seo";
import { useTranslation } from "react-i18next";

const EducationalVideos = () => {
  const { t } = useTranslation();

  return (
    <PageTemplate
      title={t("education.title")}
      subtitle={t("education.subtitle")}
      videoSources={["https://fivastudio.b-cdn.net/online-german-language-lessons.mp4"]}
      content={
        <>
          <Text id="text" as="p" fontSize="lg">
          {t("education.text")}
          </Text>
          <Text as="p" fontSize="lg">
          {t("education.text2")}
          </Text>
          <Text as="p" fontSize="lg">
          {t("education.text3")}
          </Text>
        </>
      }
    />
  );
};

export default EducationalVideos;

export function Head(props: HeadProps) {
  return (
    <SEO
      title="Fiva Studio | Educational"
      description="Transform your educational content with our expert video editing services. Our team of skilled editors will enhance your videos with engaging visuals, sound design, and storytelling techniques to captivate your audience."
    />
  )
}