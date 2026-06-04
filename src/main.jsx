import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './routes/Routes.jsx';
import ThemeProvider from './context/ThemeContext/ThemeProvider.jsx';
import AuthProvider from './context/AuthContext/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);