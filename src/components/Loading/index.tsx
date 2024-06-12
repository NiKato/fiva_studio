import React from 'react';
import loadingGif from "../../images/fivastudio.gif";
import { Image } from '@chakra-ui/react';

const Preloader = () => {
  return (
    <div style={{ maxWidth: "100%", width: "100%", height: '100vh' }}>
      <Image w="100%" h="100vh" backgroundSize="cover" objectFit="contain" src={loadingGif} alt="Loading" />
    </div>
  );
};

export default Preloader;
