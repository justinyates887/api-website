import './assets/styles/App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Home, Company, People } from './pages'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' exact={true} element={<Home />} />
      <Route path='/about/company' exact={true} element={<Company />} />
      <Route path='/about/people' exact={true} element={<People />} />
    </Routes>
    </>
  );
}

export default App;
