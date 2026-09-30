'use client';

import type { ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#28B498',
      dark: '#1D8A74',
      light: '#E6F8F5',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#D97706',
    },
    background: {
      default: '#F5F8FA',
      paper: '#ffffff',
    },
    text: {
      primary: '#1E293B',
      secondary: '#64748B',
    },
  },
  typography: {
    fontFamily: '"Abar Mid FaNum", Tahoma, Arial, sans-serif',
  },
  shape: {
    borderRadius: 20,
  },
});

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
