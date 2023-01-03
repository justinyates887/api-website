import './assets/styles/App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Home, Company, People, Contact, Residential, Commercial, Equipment, StoneTile } from './pages'
import { Chemicals, Starting } from './pages/whatweuse';
import { Service } from './pages/services';
import { ChemicalMSDS } from './pages/resources';
import { Privacy } from './pages/policies/privacy';
import { Cookies } from './pages/policies/cookies'
 //import { store } from './actions/store'

function App() {
  return (
      //<Provider store={ store }>
      <Routes>
        <Route path='/' exact={true} element={<Home />} />

        <Route path='/about/company' exact={true} element={<Company />} />
        <Route path='/about/people' exact={true} element={<People />} />

        <Route path='/services/residential' exact={true} element={<Residential />} />
        <Route path='/services/commercial' exact={true} element={<Commercial />} />
        <Route path='/services/service' exact={true} element={<Service />} />

        <Route path='/about/starting' exact={true} element={<Starting />} />
        <Route path='/about/chemicals' exact={true} element={<Chemicals />} />

        <Route path='/resources/equipment' exact={true} element={<Equipment />} />
        <Route path='/resources/stoneandtile' exact={true} element={<StoneTile />} />
        <Route path='/resources/chemicals' exact={true} element={<ChemicalMSDS />} />

        <Route path='/policies/privacy' exact={true} element={<Privacy />} />
        <Route path='/policies/cookies' exact={true} element={<Cookies />} />

        <Route path='/contact' exact={true} element={<Contact />} />

      </Routes>
    //</Provider>
  );
}

export default App;
