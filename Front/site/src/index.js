import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/scss/style.scss'
import MainLayoutContext from './context/MainLayoutContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainLayoutContext>
      <App />
    </MainLayoutContext>
  </React.StrictMode>
);

