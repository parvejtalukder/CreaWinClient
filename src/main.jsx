import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './routes/Routes.jsx';
import ThemeProvider from './context/ThemeContext/ThemeProvider.jsx';
import AuthProvider from './context/AuthContext/AuthProvider.jsx';
import LenisProvider from './context/LenisProvider/LenisProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LenisProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </LenisProvider>
  </StrictMode>
);