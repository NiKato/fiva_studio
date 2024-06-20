// src/pages/short-form.tsx
import React from "react";
import PageTemplate from "../components/templates/PageTemplate";
import { Text, SimpleGrid, Box } from "@chakra-ui/react";
import VideoPlayer from "../components/Video";
import Carousel from "../components/Carousel";

const ShortForm = () => {

  return (
    <PageTemplate
      title="Short Form"
      subtitle="You own a marketing agency, or you're SMM or a content creator that needs someone to process their content and deliver tailored short form videos for yourself or your clients?"
      content={
        <>
          <Text id="text" as="p" fontSize="lg">
            We're here to process your videos for you and deliver them under
            agreed deadlines.
          </Text>
          <Text as="p" fontSize="lg">
            We're a team of experienced editors who also have experience in
            managing social media accounts, digital marketing, and content
            creation, so we understand your needs and the importance of having a
            reliable editor who understands the vision behind your or your
            client's project.
          </Text>
          <Text>
            Our edits may vary from what we call 'industry standard' to 'next
            level edits', thus we can accommodate different requests, lower or
            higher budget. Please see some of our short-form content:
          </Text>
          {/* <SimpleGrid columns={{ base: 1, md: 2 }} spacing="40px" mx="auto">
            {videos.map((videoSrc, index) => (
              <Box key={index} w="400px" boxShadow="4px 4px 8px rgba(0, 0, 0, 0.9)">
                <VideoPlayer src={videoSrc} />
              </Box>
            ))}
          </SimpleGrid> */}
        </>
      }
      carousel={<Carousel />}
    />
  );
};

export default ShortForm;
