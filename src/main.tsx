import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Handle intended path from session storage
const intendedPath = sessionStorage.getItem('intendedPath');
if (intendedPath) {
  sessionStorage.removeItem('intendedPath');
  window.history.replaceState(null, '', intendedPath);
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);