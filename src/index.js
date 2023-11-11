import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { RandomHadithProvider } from './context/random-hadith.context';
import { ChaptersProvider } from './context/chapters.context';
import { WhichBookProvider } from './context/which-book.context';
import { WhichChapterProvider } from './context/which-chapter.context';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RandomHadithProvider>
        <WhichBookProvider>
          <ChaptersProvider>
            <WhichChapterProvider>
              <App />
            </WhichChapterProvider>
          </ChaptersProvider>
        </WhichBookProvider>
      </RandomHadithProvider>
    </BrowserRouter>
  </React.StrictMode>
);