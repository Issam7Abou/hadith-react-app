import { Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar/nav-bar.component';
import HomePage from './components/HomePage/home-page.component';
import RandomHadith from './components/RandomHadith/random-hadith.component';
import AllBooks from './components/AllBooks/BookList/all-books.component';
import AllChapters from './components/AllBooks/ChapterList/all-chapters.component';
import AllHadiths from './components/AllBooks/HadithList/all-hadiths.component';
import FavoriteHadiths from './components/Favorites/favorite-hadiths.components';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/random-hadith' element={<RandomHadith />} />
        <Route path='/all-books' element={<AllBooks />} />
        <Route path='/all-chapters' element={<AllChapters />}/>
        <Route path='/all-hadiths' element={<AllHadiths />}/>
        <Route path='/favorites' element={<FavoriteHadiths />}/>
      </Routes>
    </>
  )
}

export default App;