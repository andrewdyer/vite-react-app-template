import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { App } from '@/core';
import { enableMocking } from '@/utilities';

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
