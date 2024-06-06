import React, { ReactNode } from "react"
import {
    Box,
    chakra,
    Image,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
  } from '@chakra-ui/react';
  import logo from "../../images/logo.png"
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text color="#3377FF" fontWeight={700} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'7xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}>
            <Stack spacing={6}>
              <Box>
              <Image width="116px" h="48px" src={logo} />
              </Box>
              <Text fontSize={'sm'}>
                © 2024 Fiva Studio. All rights reserved
              </Text>
              <Stack direction={'row'} spacing={6}>
                <SocialButton label={'Twitter'} href={'#'}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={'YouTube'} href={'#'}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                  <FaInstagram />
                </SocialButton>
              </Stack>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>OSNOVNE STRANICE</ListHeader>
              <Text fontWeight={400}><Link href={'#'}>About us</Link></Text>
              <Text fontWeight={400}><Link href={'#'}>Contact us</Link></Text>
              <Text fontWeight={400}><Link href={'#'}>Pricing</Link></Text>
              <Text fontWeight={400}><Link href={'#'}>Our work</Link></Text>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>LINKOVI</ListHeader>
              <Text fontWeight={400}><Link href={'#'}>Help Center</Link></Text>
              <Text fontWeight={400}><Link href={'#'}>Terms of Service</Link></Text>
              <Text fontWeight={400}><Link href={'#'}>Legal</Link></Text>
              <Text fontWeight={400}><Link href={'#'}>Privacy Policy</Link></Text>
              <Text fontWeight={400}><Link href={'#'}>Satus</Link></Text>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>OVDE MOŽEMO UMESTO MAILA DA STAVIMO WA KONTAKT ILI SLIČNO</ListHeader>
              <Stack direction={'row'}>
                <Input
                  placeholder={'Your email address'}
                  bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <IconButton
                  bg={useColorModeValue('green.400', 'green.800')}
                  color={useColorModeValue('white', 'gray.800')}
                  _hover={{
                    bg: 'green.600',
                  }}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }