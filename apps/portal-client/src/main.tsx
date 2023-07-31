import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { App } from './app/app';
import { AppGuard, AppProvider } from '@portal/components';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <AppProvider>
      <AppGuard>
        <App />
      </AppGuard>
    </AppProvider>
  </StrictMode>
);
