import React from "react"
import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react"
import { statsData } from "../../constants/statsCard"

interface StatsCardProps {
  title: string
  stat: string
  imageSrc: string
}

function StatsCard(props: StatsCardProps) {
  const { title, stat, imageSrc } = props
  return (
    <Stat
      display="flex"
      flexFlow="column"
      justifyContent="flex-end"
      alignContent="center"
      textAlign="center"
      px={{ base: 4, md: 0 }}
      mx={{ base: 6, md: 0 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderRadius={"24px"}
      h="513px"
      backgroundImage={imageSrc}
      backgroundSize="cover"
      backgroundPosition="center"
      borderColor={useColorModeValue("gray.800", "#fff")}
      rounded={"lg"}
      position="relative"
    >
      {/* Gradient overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bgGradient="linear(to-b, rgba(0,0,0,0), rgba(0,0,0,0.5))"
        bgClip="content-box"
        _hover={{
          bgGradient: "linear(to-b, rgba(0,0,0,0), rgba(255,255,255,0.1))",
        }}
      />
      <StatLabel
        color="#fff"
        fontSize="2xl"
        pb={"24px"}
        fontWeight={700}
        isTruncated
        pos="relative"
        zIndex="999"
      >
        {title}
      </StatLabel>
      <StatNumber
        pos="relative"
        zIndex="999"
        color="#fff"
        fontSize={"md"}
        fontWeight={300}
      >
        {stat}
      </StatNumber>
    </Stat>
  )
}

export default function BasicStatistics() {
  return (
    <Box maxW="1280px" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 4 }}>
        {statsData.map((data, index) => (
          <StatsCard
            key={index}
            title={data.title}
            stat={data.stat}
            imageSrc={data.imageSrc}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}
