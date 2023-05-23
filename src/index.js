import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import {AppProvider} from './context';
import './index.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookDetails/BookDetails';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "Book-search-app/" element = {<Home />}>
          <Route path = "Book-search-app/about" element = {<About />}/>
          <Route path = "Book-search-app/book" element = {<BookList />}/>
          <Route path = "Book-search-app/book/:id" element = {<BookDetails />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

