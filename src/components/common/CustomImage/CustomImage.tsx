import { useEffect, useState } from 'react';
import { CustomImageStyle } from './CustomImage.styled';

const CustomImage = ({
  src,
  fallbackSrc = '/image/default_image.jpg',
  ...rest
}: CustomImageProps) => {
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  return (
    <CustomImageStyle
      {...rest}
      src={imageSrc}
      alt=""
      height={100}
      width={100}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          // Broken image
          setImageSrc(fallbackSrc);
        }
      }}
      onError={() => {
        setImageSrc(fallbackSrc);
      }}
    />
  );
};

export default CustomImage;
