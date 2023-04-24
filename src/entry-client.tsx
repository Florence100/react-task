import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { WrappedApp } from './app/App';
import { Provider } from 'react-redux';
import store from './store';
import React from 'react';

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <WrappedApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
