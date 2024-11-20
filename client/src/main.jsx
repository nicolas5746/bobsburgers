import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from '@/routes/Router.jsx';
import '@/styles/global.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }} />
  </StrictMode>,
);