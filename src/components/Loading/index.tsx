import React from 'react';
import { Box, Image, Spinner } from '@chakra-ui/react';

const Preloader = () => {
  return (
    <Box display='flex' alignItems='center' justifyContent='center' m='auto' h='100vh'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
  </Box>
  );
};

export default Preloader;
