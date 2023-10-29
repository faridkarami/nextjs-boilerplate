import React from 'react';
import { SplashStyle, SplashStyleImage } from './Splash.styled';
import { Lottie } from '@/components/base/Lottie';
import { LottieFile } from '@/core/utils/File';

const Splash = () => {
  return (
    <SplashStyle>
      <Lottie animationData={LottieFile.Loading} height={200} width={200} />
      <SplashStyleImage />
    </SplashStyle>
  );
};

export default Splash;
