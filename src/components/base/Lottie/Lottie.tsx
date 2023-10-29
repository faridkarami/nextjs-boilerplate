import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { LottieContainer } from './Lottie.styled';

const Lottie = ({ animationData, width, height }: LottieProps) => {
  const element = useRef<HTMLDivElement>(null);
  const lottieInstance = useRef<any>();

  useEffect(() => {
    if (element.current) {
      lottieInstance.current?.destroy();
      lottieInstance.current = lottie.loadAnimation({
        animationData,
        container: element.current,
      });
    }
    return () => {
      lottieInstance.current?.destroy();
      lottieInstance.current = null;
    };
  }, [animationData]);

  return <LottieContainer style={{ width, height }} ref={element} />;
};

export default Lottie;
