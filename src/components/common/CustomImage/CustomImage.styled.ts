import { styled } from '@mui/material';
import Image from 'next/image';

export const CustomImageStyle = styled(Image)(({ theme }) => ({
  objectFit: 'contain',
  verticalAlign: 'middle',
  maxWidth: '100%',
  height: 'auto',
}));
