import { styled, Box } from '@mui/material';
import { CustomImage } from '@/components/common/CustomImage';
import { ImageFile } from '@/core/utils/File';

export const SplashStyle = styled(Box)(({ theme }) => ({
  position: 'relative',
}));

SplashStyle.defaultProps = {};

export const SplashStyleImage = styled(CustomImage)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  margin: 'auto',
}));

SplashStyleImage.defaultProps = {
  src: ImageFile.Logo,
  width: 80,
  height: 40,
  priority: true,
};
