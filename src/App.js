import React from 'react';
import "./assets/fonts/Kaftan - Trial.otf"
import "./assets/fonts/Neue-montreal/NeueMontreal-Medium.otf"
// import { gsap } from "gsap";
import { Route , Routes } from 'react-router-dom';
import { Home ,About , Work ,Method ,Contact ,Privacy , Careers} from './pages';

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
         <Route path='/join-the-squad' element={<Careers />} />
         <Route path='/privacy' element={<Privacy />} />
      </Routes>
    </div>

  );
}

export default App;
