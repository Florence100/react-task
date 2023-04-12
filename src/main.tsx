import React from 'react';
import ReactDOM from 'react-dom/client';
import { WrappedApp } from './app/App';
import './style.css';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <WrappedApp />
    </React.StrictMode>
  </Provider>
);
