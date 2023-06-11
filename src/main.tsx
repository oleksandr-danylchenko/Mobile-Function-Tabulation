import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { Stack, CircularProgress } from '@mui/material';
import { PersistGate } from 'redux-persist/integration/react';

import App from '@/App';
import store, { persistor } from '@/store/store';
import { AppThemeProvider } from '@/styles/AppThemeProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={
          <Stack
            position="absolute"
            left="0"
            top="0"
            right="0"
            bottom="0"
            alignItems="center"
            justifyContent="center"
            sx={{ backgroundColor: 'primary.lighter' }}
          >
            <CircularProgress size="4rem" sx={{ color: 'primary.dark' }} />
          </Stack>
        }
        persistor={persistor}
      >
        <AppThemeProvider>
          <App />
        </AppThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
