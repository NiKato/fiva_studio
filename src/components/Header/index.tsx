import React, { useEffect, useState } from "react"
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
  Image, // Import the hook
} from "@chakra-ui/react"
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MoonIcon, // Import the icon for dark mode
  SunIcon, // Import the icon for light mode
} from "@chakra-ui/icons"
import LanguageSwitcher from "../LanguageSwitcher"
import { Logo } from "../Icons/Logo"
import logo from "../../images/logo.png"

export default function Header({ toggleColorMode, colorMode }: any) {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box
      px={5}
      top={0}
      zIndex={1000}
      transition="opacity 0.5s ease-in-out"
      position="fixed"
      width="100%"
    >
      <Flex
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderStyle={"solid"}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          {/* <Logo /> */}
          <Image width="72px" h="36px" src={logo} />
          <Flex
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            ml={5}
          >
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={0}
        >
          <IconButton
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant={"ghost"}
            bg="none"
            _hover={{ bg: "none" }}
            // color={colorMode === "light" ? "#666666" : "#fff"}
            aria-label={"Toggle Dark/Light Mode"}
          />
          <LanguageSwitcher />
          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"md"}
            fontWeight={600}
            color={"white"}
            bg={"#477EEB"}
            href={"#"}
            _hover={{
              bg: "#33333",
            }}
          >
            Contact
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const popoverContentBgColor = useColorModeValue("white", "gray.800")
  const { colorMode } = useColorMode()
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Flex align={"center"}>
                <Link
                  bg={"none"}
                  p={2}
                  href={navItem.href ?? "#"}
                  fontSize={"md"}
                  fontWeight={600}
                  color={
                    navItem.color || useColorModeValue("gray.800", "white")
                  } // Ažuriramo boju slova ovde
                  _hover={{
                    textDecoration: "none",
                    color: useColorModeValue("gray.600", "gray.200"),
                  }}
                >
                  {navItem.label}
                </Link>
                {navItem.children && (
                  <Icon
                    as={ChevronDownIcon}
                    color={useColorModeValue("gray.800", "white")}
                  />
                )}
              </Flex>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  )
}

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map(child => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
  color?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
  },
  {
    label: "Services",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  {
    label: "Questions",
    href: "#",
  },
  {
    label: "Contact",
    href: "#",
  },
]
