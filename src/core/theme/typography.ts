import { TypographyOptions } from '@mui/material/styles/createTypography';

const typography: TypographyOptions = {
  fontSize: 16,
  fontFamily: ['yekan', 'roboto'].join(','),
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontSize: '2rem',
  },
  h2: {
    fontSize: '1.375rem',
  },
  h3: {
    fontSize: '1.25rem',
  },
  h4: {
    fontSize: '1.125rem',
  },
  h5: {
    fontSize: '1rem',
  },
  h6: {
    fontSize: '0.875rem',
  },
  subtitle1: {
    fontSize: '1rem',
  },
  subtitle2: {
    fontSize: '1rem',
  },
  body1: {
    fontSize: '0.875rem',
  },
  body2: {
    fontSize: '0.9rem',
  },
  caption: {
    fontSize: '1rem',
  },
  overline: {
    fontSize: '1rem',
    textTransform: 'uppercase',
  },
  button: {
    fontSize: '0.875rem',
    fontWeight: 'initial',
  },
} as const;

export default typography;
