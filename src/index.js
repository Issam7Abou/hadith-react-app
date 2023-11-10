import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { RandomHadithProvider } from './context/random-hadith.context';
import { ChaptersProvider } from './context/chapters.context';
import { WhichBookProvider } from './context/which-book.context';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RandomHadithProvider>
        <ChaptersProvider>
          <WhichBookProvider>
            <App />
          </WhichBookProvider>
        </ChaptersProvider>
      </RandomHadithProvider>
    </BrowserRouter>
  </React.StrictMode>
);