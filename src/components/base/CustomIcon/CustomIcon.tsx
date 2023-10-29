import { CustomIconProps } from './types';
import { alpha, useTheme } from '@mui/material';

const CustomIcon = ({ source: IconLocal, ...rest }: CustomIconProps) => {
  const theme = useTheme();

  return (
    <>
      {IconLocal && (
        <IconLocal
          sx={{ color: alpha(theme.palette.text.primary, 0.5) }}
          {...rest}
        />
      )}
    </>
  );
};

export default CustomIcon;
