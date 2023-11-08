import { Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar/nav-bar.component';
import HomePage from './components/HomePage/home-page.component';
import RandomHadith from './components/RandomHadith/random-hadith.component';
import AllBooks from './components/AllBooks/BookList/all-books.component';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/random-hadith' element={<RandomHadith />} />
        <Route path='/all-books' element={<AllBooks />} />
      </Routes>
    </>
  )
}

export default App;