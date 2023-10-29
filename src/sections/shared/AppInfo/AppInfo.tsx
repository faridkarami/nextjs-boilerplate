import { Grid, Typography, useTheme } from '@mui/material';
import { AppConfig, Constants } from '@/core/utils';
import { Fragment } from 'react';

const AppInfo = ({ ...rest }: AppInfoProps) => {
  const theme = useTheme();

  return (
    <Fragment {...rest}>
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        height={'100%'}
        textAlign={'center'}
      >
        <Grid item>
          <Typography variant="body2" color={theme.palette.text.secondary}>
            {Constants.version} {AppConfig.version}
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AppInfo;
