import { ThemeModeEnum } from '@/core/enums';

declare module '@mui/material/styles/createPalette' {
  export interface Palette {
    accent: PaletteColor;
    white: PaletteColor;
    black: PaletteColor;
    gradient: PaletteColor;
  }
  export interface TypeBackground {
    default: string;
    paper: string;
    neutral?: string;
  }
  export interface TypeText {
    default: string;
    paper: string;
    neutral?: string;
    constant?: string;
  }
}

const colorPalette = {
  primary: '#00838F',
  secondary: '#283593',
  accent: '#AD1457',

  light: ['#FFFFFF', '#DDDDDD', '#AAAAAA'],
  dark: ['#111111', '#333333', '#666666'],

  error: { light: '#EF9A9A', dark: '#E53935' },
  warning: { light: '#FFE082', dark: '#FDD835' },
  success: { light: '#A5D6A7', dark: '#43A047' },

  disabled: { light: '#CCCCCC', dark: '#AAAAAA' },

  constant: { white: '#FFFFFF', black: '#222222' },
};

export default function palette(themeMode: ThemeModeEnum) {
  const theme = {
    light: {
      error: {
        main: colorPalette.error.light,
      },
      warning: {
        main: colorPalette.warning.light,
      },
      success: {
        main: colorPalette.success.light,
      },
      background: {
        default: colorPalette.light[0],
        paper: colorPalette.light[1],
        neutral: colorPalette.light[2],
      },
      text: {
        primary: colorPalette.dark[0],
        secondary: colorPalette.dark[2],
        disabled: colorPalette.disabled.light,
      },
    },
    dark: {
      error: {
        main: colorPalette.error.dark,
      },
      warning: {
        main: colorPalette.warning.dark,
      },
      success: {
        main: colorPalette.success.dark,
      },
      background: {
        default: colorPalette.dark[0],
        paper: colorPalette.dark[1],
        neutral: colorPalette.dark[2],
      },
      text: {
        primary: colorPalette.light[0],
        secondary: colorPalette.light[2],
        disabled: colorPalette.disabled.dark,
      },
    },
  } as const;

  const constant = {
    primary: {
      main: colorPalette.primary,
    },
    secondary: {
      main: colorPalette.secondary,
    },
    accent: {
      main: colorPalette.accent,
    },
    white: {
      main: colorPalette.constant.white,
    },
    black: {
      main: colorPalette.constant.black,
    },
    gradient: {
      main: `linear-gradient(45deg, ${colorPalette.primary}, ${colorPalette.secondary})`,
      mainChannel: '0 0 0',
    },
  };

  return { ...theme[themeMode], ...constant };
}
