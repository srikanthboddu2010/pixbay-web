import React from 'react';
import LottieAnimation from '../lottieAnimation/LottieAnimation';
import { lottieLoader } from '../lottieAnimation/LottieData';

const Loader = () => {
  return (
    <LottieAnimation file={lottieLoader} width="200px" height="200px" />
  );
}

export default Loader;
