import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PDFViewer } from '@react-pdf/renderer';

import './index.css';

import Resume from '@/Resume';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PDFViewer className="h-screen w-screen">
      <Resume />
    </PDFViewer>
  </StrictMode>,
);
