import React from "react";
import { Box, SimpleGrid, Icon } from "@chakra-ui/react";
import features from "../../constants/features";
import { useTranslation } from "react-i18next";
import Feature from "./Feature";

const Benefits = () => {
  const { t } = useTranslation();

  return (
    <Box py={5}>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={5}>
        {features.features.map((feature, index) => (
          <Feature
            key={index}
            icon={<Icon as={feature.icon} width={6} height={6} />}
            title={t(feature.title)}
            text={t(feature.text)}
            linkText={feature.linkText ? t(feature.linkText) : undefined}
            linkUrl={feature.linkUrl}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Benefits;
