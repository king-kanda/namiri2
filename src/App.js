import React from 'react';
import "./assets/fonts/Kaftan - Trial.otf"
import "./assets/fonts/Neue-montreal/NeueMontreal-Medium.otf"
// import { gsap } from "gsap";
import { Route , Routes } from 'react-router-dom';
import { Home ,About , Work ,Method ,Contact ,FraciahLaw } from './pages';

import './App.css';


function App() {
  return (
    
    <div className='app'>
      <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/about-us' element={<About/>}></Route>
         <Route path='/our-work' element={<Work/>}></Route>
         <Route path='/our-method' element={<Method/>}></Route>
         <Route path='/lets-talk' element={<Contact/>}></Route>
         <Route path='/case/fraciah-law' element={<FraciahLaw/>}></Route>
      </Routes>
    </div>

  );
}

export default App;
