import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import ResumeViewer from '@/Resume';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResumeViewer />
  </StrictMode>,
);
