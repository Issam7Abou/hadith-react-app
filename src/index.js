import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { RandomHadithProvider } from './context/random-hadith.context';
import { BooksProvider } from './context/books.context';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RandomHadithProvider>
        <BooksProvider>
          <App />
        </BooksProvider>
      </RandomHadithProvider>
    </BrowserRouter>
  </React.StrictMode>
);