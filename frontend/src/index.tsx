import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import {
  ThemeProvider,
  ToasterComponent,
  ToasterProvider,
} from '@gravity-ui/uikit';
import { Provider } from 'react-redux';
import '@gravity-ui/uikit/styles/styles.scss';
import './global.scss';
import { store } from './store/store.ts';

const container = document.getElementById('root');

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <ThemeProvider theme="light">
      <ToasterProvider >
        <Provider store={store}>
          <React.StrictMode>
            <App />
            <ToasterComponent />
          </React.StrictMode>
        </Provider>
      </ToasterProvider>
    </ThemeProvider>
  );
}
