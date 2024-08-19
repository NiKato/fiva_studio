import React from "react"
import {
  Box,
  chakra,
  Link,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react"
import { statsData } from "../../constants/statsCard"
import { useTranslation } from "react-i18next"

interface StatsCardProps {
  title: string
  stat: string
  imageSrc: string
  href: string
}

function StatsCard(props: StatsCardProps) {
  const { title, stat, imageSrc, href } = props
  const { t } = useTranslation()
  return (
    <Link href={href}>
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
          fontSize="xl"
          pb={"24px"}
          fontWeight={700}
          isTruncated
          pos="relative"
          zIndex="999"
        >
          {t(title)}
        </StatLabel>
        <StatNumber
          pos="relative"
          zIndex="999"
          color="#fff"
          fontSize={"sm"}
          px={2}
          fontWeight={300}
        >
          {t(stat)}
        </StatNumber>
      </Stat>
    </Link>
  )
}

export default function LongForm() {
  return (
    <Box
      maxW="1280px"
      mx={"auto"}
      mt={{ base: 0, md: "-10px" }}
      px={{ base: 2, sm: 12, md: 8 }}
    >
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 4 }}>
        {statsData.map((data, index) => (
          <StatsCard
            key={index}
            title={data.title}
            stat={data.stat}
            imageSrc={data.imageSrc}
            href={data.href}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}
