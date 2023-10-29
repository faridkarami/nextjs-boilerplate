'use client'

import { Box, Grid, styled } from '@mui/material';
import { useRedirect } from '@/hooks';
import { Splash } from '@/sections/shared/Splash';

const Wrapper = styled(Box)(({ theme }) => ({
  height: '100vh',
  backgroundColor: theme.palette.background.default,
}));

const Page = () => {
  // useRedirect('/auth/login', 5);

  return (
    <Wrapper>
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Grid item>
        <Splash />
      </Grid>
    </Grid>
  </Wrapper>
  );
};

export default Page;
