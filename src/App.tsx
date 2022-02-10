import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { AboutPage } from './pages/AboutPage';
import { TodosPages } from './pages/TodosPages';

const App: React.FC = () => {
 return (
  <BrowserRouter>
   <NavBar />
   <div className="container">
    <Routes>
     <Route element={<TodosPages />} path="/" />
     <Route element={<AboutPage />} path="/about" />
    </Routes>
   </div>
  </BrowserRouter>
 );
};

export default App;
