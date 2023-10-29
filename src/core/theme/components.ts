import { Components, alpha } from '@mui/material';
import variables from './variables';

const components: Components = {
  MuiTextField: {
    styleOverrides: {
      root: ({ theme }: any) =>
        theme({
          '& .MuiInputBase-root': {
            borderRadius: variables.radius.small,
            // height: variables.height.normal,
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: theme.palette.background.neutral,
            },
            '&:hover fieldset': {
              borderColor: theme.palette.primary.main,
            },
            '&.Mui-focused fieldset': {
              borderColor: theme.palette.primary.main,
            },
          },
        }),
    },
    defaultProps: {
      variant: 'outlined',
    },
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme }: any) =>
        theme({
          borderRadius: variables.radius.small,
          // height: variables.height.normal,
        }),
    },
    defaultProps: {
      fullWidth: true,
      size: 'large',
    },
  },
  MuiDrawer: {
    styleOverrides: {
      root: ({ theme }: any) =>
        theme({
          '&.MuiDrawer-root': {
            width: variables.frameWidth,
            margin: 'auto',
            overflow: 'hidden',
          },
          '& .MuiDrawer-paper': {
            position: 'absolute',
          },
        }),
    },
  },
  MuiBackdrop: {
    styleOverrides: {
      root: ({ theme }: any) =>
        theme({
          '&.MuiBackdrop-root': {
            width: variables.frameWidth,
            margin: 'auto',
          },
        }),
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: ({ theme }: any) =>
        theme({
          '&.MuiListItem-divider': {
            borderBottomColor: alpha(theme.palette.text.primary, 0.1),
          },
        }),
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: ({ theme }: any) =>
        theme({
          '&.MuiListItemIcon-root': {
            minWidth: '35px',
          },
        }),
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: ({ theme }: any) =>
        theme({
          '&.MuiAppBar-root': {
            maxWidth: variables.frameWidth,
            margin: 'auto',
            left: 0,
          },
        }),
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: ({ theme }: any) =>
        theme({
          '&.MuiToolbar-gutters': {
            paddingRight: '8px',
            paddingLeft: '8px',
          },
        }),
    },
  },
  MuiBadge: {
    styleOverrides: {
      root: ({ theme }: any) =>
        theme({
          '& .MuiBadge-badge': {
            position: 'initial',
            transform: 'initial',
          },
        }),
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: ({ theme }: any) =>
        theme({
          '&.MuiDivider-root': {
            background: alpha(theme.palette.text.primary, 0.1),
          },
        }),
    },
    defaultProps: {
      variant: 'middle',
    },
  },
  // MuiToolbar-gutters
} as const;

export default components;

// .MuiDrawer-paper
