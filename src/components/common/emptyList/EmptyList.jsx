import React from 'react';
import LottieAnimation from '../lottieAnimation/LottieAnimation';
import { lottieNotFound } from '../lottieAnimation/LottieData';

const EmptyList = () => {
  return (
    <LottieAnimation width={200} height={200} file={lottieNotFound} />
  );
}

export default EmptyList;
