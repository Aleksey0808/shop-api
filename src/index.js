import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './Global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/shop-api">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
