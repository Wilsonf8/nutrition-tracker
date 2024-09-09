import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Home from './Components/Home.js'
import Add from './Components/Add.js'
import { Link } from 'react-router-dom'
import './App.css';

function App() {

  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className='header-box'>
        <h1>Macro Tracker</h1>
      </div>
      <div className='boxes-container'>
        <BrowserRouter>        
          <Routes>  
              <Route path='/' element={[<Home macro='Calories'/>, <Home macro='Protein'/>, <Home macro='Carbs'/>, <Home macro='Fat'/>, modalOpen && <Add closeModal={() => {setModalOpen(false)}}/>]}></Route>   
          </Routes>      
        </BrowserRouter>  
      </div>   
    </>
  );
}

export default App;
