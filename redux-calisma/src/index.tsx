import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductPage from './page/ProductPage';
import { Provider } from 'react-redux';
import store from './store';
import AnketPage from './page/AnketPage';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
  <AnketPage />
  </Provider>
);