import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from '@/routes/Router.jsx';
import '@/styles/global.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);