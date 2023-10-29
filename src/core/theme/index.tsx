import React from 'react';
import {
  createTheme,
  ThemeOptions,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';
import typography from './typography';
import palette from './palette';
import { AppConfig } from '@/core/utils';
import RTL from './rtl';
import components from './components';
import { useAppSelector } from '@/redux/hooks';

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const status = useAppSelector((state) => state.themeReducer.value);

  const themeOptions: ThemeOptions = {
    typography,
    palette: palette(status),
    direction: AppConfig.direction,
    components,
  };

  const theme = createTheme(themeOptions);

  return (
    <MUIThemeProvider theme={theme}>
      <RTL>{children}</RTL>
    </MUIThemeProvider>
  );
}
