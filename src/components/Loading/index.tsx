import React from 'react';
import loadingGif from "../../images/Loading.gif";

const Preloader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <img src={loadingGif} alt="Loading" />
    </div>
  );
};

export default Preloader;
