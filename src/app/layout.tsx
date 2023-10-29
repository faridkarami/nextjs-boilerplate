'use client';

import { useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import ThemeProvider from '@/core/theme';
import { AppConfig } from '@/core/utils';
import { Providers } from '@/redux/provider';
import 'public/css/index.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(
        (registration) => {
          console.log(
            'Service Worker registration successful with scope: ',
            registration.scope,
          );
        },
        (err) => {
          console.log('Service Worker registration failed: ', err);
        },
      );
    }
  }, []);
  
  return (
    <html lang={AppConfig.locale} dir={AppConfig.direction}>
      <head>
        <title>FK8</title>
      </head>
      <body>
      <CssBaseline />
      <Providers>
        <ThemeProvider>
        {children}
        </ThemeProvider>
      </Providers>
        </body>
    </html>
  );
}
