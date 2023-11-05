import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { RandomHadithProvider } from './context/random-hadith.context';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RandomHadithProvider>
        <App />
      </RandomHadithProvider>
    </BrowserRouter>
  </React.StrictMode>
);