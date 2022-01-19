import './assets/styles/App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Home, Company, People, Contact, Residential, Commercial } from './pages'
 //import { store } from './actions/store'
import { Provider } from 'react-redux'

function App() {
  return (
    //<Provider store={ store }>
      <Routes>
        <Route path='/' exact={true} element={<Home />} />

        <Route path='/about/company' exact={true} element={<Company />} />
        <Route path='/about/people' exact={true} element={<People />} />

        <Route path='/services/residential' exact={true} element={<Residential />} />
        <Route path='/services/commercial' exact={true} element={<Commercial />} />

        <Route path='/contact' exact={true} element={<Contact />} />
      </Routes>
    //</Provider>
  );
}

export default App;