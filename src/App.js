import './assets/styles/App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Home, Company } from './pages'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' exact={true} element={<Home />} />
      <Route path='/about/company' exact={true} element={<Company />} />
    </Routes>
    </>
  );
}

export default App;
