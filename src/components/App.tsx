import React from 'react';
import {} from 'react-redux'
import './App.css';
import {Route, Routes} from 'react-router-dom';
import AboutPage from './about/AboutPage';
import HomePage from './home/HomePage';
import Header from './common/Header';
import PageNotFound from './PageNotFound';
import CoursesPage from './courses/CoursesPage';

function App() {
  
  return (
    <div className="App">
      
      <Header/>
      <Routes >
      <Route  path="/" element={<HomePage />} />
      <Route  path="/about/AboutPage" element={<AboutPage/>} />
      <Route  path="/courses/CoursePage" element={<CoursesPage/>} />
      <Route   path="*" element={<PageNotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
